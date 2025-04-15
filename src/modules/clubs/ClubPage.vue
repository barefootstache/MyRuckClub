<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlScale,
  LIcon,
} from '@vue-leaflet/vue-leaflet';
import { OsmUtils } from '@/business-logic/index.utils';
import { LocationService } from '@/services';
import {
  Club,
  ClubEvent,
  PLACEHOLDER_ASSOCIATION,
  PLACEHOLDER_CLUB,
  PLACEHOLDER_BOUNDINGBOX,
  Coordinates,
} from '@/business-logic';
import Contact from './components/Contact.vue';
import MarkerDialog from '@/components/MarkerDialog.vue';
import EventsList from '@/components/EventsList.vue';
import { useClubsStore, useClubEventsStore, useAssociationsStore } from '@/stores';
import { AllGeoJSON, bbox, bboxPolygon, buffer, center, points, bbox as turfBbox } from '@turf/turf';

/**
 * Reference for `this.$route`.
 */
const route = useRoute();
const clubId = ref(route.params.id as string);
const mapDataReady = ref(false);
const map = ref<typeof LMap>();

const storeClubs = useClubsStore();
const storeEvents = useClubEventsStore();
const storeAssociations = useAssociationsStore();

const data = reactive({
  club: PLACEHOLDER_CLUB,
  associations: [PLACEHOLDER_ASSOCIATION],
  upcomingClubEvents: [] as ClubEvent[],
  uniqueEventsLocations: [] as ClubEvent[],
  allCoordinates: [PLACEHOLDER_CLUB.coordinates],
  leaflet: { bbox: PLACEHOLDER_BOUNDINGBOX.box, center: PLACEHOLDER_CLUB.coordinates, zoom: PLACEHOLDER_BOUNDINGBOX.zoom }
})

onMounted(async () => {
  await storeClubs.registerClubsList();
  await storeEvents.registerClubEventsList();
  await storeAssociations.registerAssociationsList();

  const club = storeClubs.getClubById(clubId.value);
  const associations = club.associations.map((ass) => storeAssociations.getAssociationByType(ass));
  const upcomingClubEvents = storeEvents.getEventsByClubId(clubId.value);

  const uniqueEventsLocations = LocationService.getUniqueEventsLocations(upcomingClubEvents);
  const allCoordinates = uniqueEventsLocations
    .map((ev: ClubEvent) => LocationService.getCoordinates(ev))
    .concat([club.coordinates]);

  const boundingBox = bbox(points(allCoordinates));
  const leafletBbox: [[number, number], [number, number]] = [[boundingBox[0], boundingBox[1]], [boundingBox[2], boundingBox[3]]];

  const centerBbox = center(points(allCoordinates));

  await nextTick(); // wait for DOM so we can measure map container
  const mapContainer = document.querySelector('.map-view') as HTMLElement;
  const mapSize = {
    width: mapContainer.offsetWidth,
    height: mapContainer.offsetHeight,
  };

  const optimalZoom = getZoomFromBboxWithPadding(leafletBbox, mapSize);

  data.club = club;
  data.associations = associations;
  data.upcomingClubEvents = upcomingClubEvents;
  data.uniqueEventsLocations = uniqueEventsLocations;
  data.allCoordinates = allCoordinates;

  data.leaflet.bbox = leafletBbox;
  data.leaflet.center = centerBbox.geometry.coordinates as Coordinates;
  data.leaflet.zoom = optimalZoom;

  mapDataReady.value = true;
});

const visible = ref(false);
const markerDialog = ref();
const filename = ref(
  `${data.club.name.replace(' ', '_')}_events_calendar.ics`
);

/**
 * Shows the marker dialog.
 * @param value - the visibility of the dialog
 * @param body - the details of the dialog body
 */
function showDialog(value: boolean, body: Club | ClubEvent): void {
  visible.value = value;
  markerDialog.value = body;
}

/**
 * Gets the profile logo link of the club, if it has one, otherwise uses the default.
 * @returns the URL.
 */
function getProfileLogoLink(): string {
  if (data.club.hasLogo) {
    return `clubs/${data.club.id}-logo.jpg`;
  } else {
    return `clubs/myruckclub-logo.png`;
  }
}

function getZoomFromBboxWithPadding(
  bbox: [[number, number], [number, number]],
  mapSize: { width: number, height: number },
  paddingMeters = 500,
  tileSize = 256
): number {
  // Buffer the bbox by <paddingMeters> meters
  const minX = Math.min(bbox[0][0], bbox[1][0]);
  const maxX = Math.max(bbox[0][0], bbox[1][0]);
  const minY = Math.min(bbox[0][1], bbox[1][1]);
  const maxY = Math.max(bbox[0][1], bbox[1][1]);
  const polygon = bboxPolygon([minX, minY, maxX, maxY]);
  const padded = buffer(polygon, paddingMeters, { units: 'meters' });
  const paddedBboxArr = turfBbox(padded as AllGeoJSON);

  // Calculate zoom
  const [[west, south], [east, north]]: [[number, number], [number, number]] = [
    [paddedBboxArr[0], paddedBboxArr[1]],
    [paddedBboxArr[2], paddedBboxArr[3]],
  ];

  const latRad = (lat: number) =>
    Math.log(Math.tan((Math.PI / 4) + (Math.PI / 180) * lat / 2));

  const WORLD_DIM = { width: tileSize, height: tileSize };
  const ZOOM_MAX = 18;

  const latFraction = (latRad(north) - latRad(south)) / Math.PI;
  const lngDiff = east - west;
  const lngFraction = ((lngDiff < 0 ? (lngDiff + 360) : lngDiff) / 360);

  const latZoom = Math.floor(Math.log2(mapSize.height / WORLD_DIM.height / latFraction));
  const lngZoom = Math.floor(Math.log2(mapSize.width / WORLD_DIM.width / lngFraction));

  return Math.min(latZoom, lngZoom, ZOOM_MAX);
}

</script>

<template>
  <v-card class="header text-center" :title="data.club.name">
    <template #prepend>
      <v-avatar :image="getProfileLogoLink()" size="80"> </v-avatar>
    </template>
    <v-card-text v-if="data.club.default?.location && !data.club.hide">We typically meet at
      <a :href="LocationService.getLocationClubUrl(data.club)" target="_blank">{{ data.club.default?.location
        }}</a>.</v-card-text>
  </v-card>

  <div class="map-view v-card--variant-elevated" v-if="!data.club.hide">
    <l-map ref="map" :bounds="data.leaflet.bbox" :options="{ zoomControl: false }" :center="data.leaflet.center"
      :zoom="data.leaflet.zoom" v-if="mapDataReady">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"></l-tile-layer>
      <l-control-scale position="bottomleft" :imperial="true" :metric="true"></l-control-scale>

      <l-marker @click="showDialog(true, data.club)" v-if="!data.club.hide" :lat-lng="data.club.coordinates">
        <l-icon :icon-url="OsmUtils.getPin('default').options.iconUrl"
          :icon-size="OsmUtils.getPin('default').options.iconSize"
          :icon-anchor="OsmUtils.getPin('default').options.iconAnchor"></l-icon>
      </l-marker>

      <l-marker @click="showDialog(true, ev)" v-for="(ev, evId) in data.uniqueEventsLocations" :key="evId"
        :lat-lng="ev.coordinates">
        <l-icon :icon-url="OsmUtils.getPin(ev.type).options.iconUrl"
          :icon-size="OsmUtils.getPin(ev.type).options.iconSize"
          :icon-anchor="OsmUtils.getPin(ev.type).options.iconAnchor"></l-icon>
      </l-marker>

      <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
        <MarkerDialog :details="markerDialog"></MarkerDialog>
      </v-dialog>
    </l-map>
  </div>

  <v-card style="padding: var(--v-space-mini); margin-top: var(--v-space-micro);">
    <Contact class="text-center" :club="data.club"></Contact>
  </v-card>

  <v-card style="padding: var(--v-space-mini);">
    <div class="text-center" v-if="data.associations?.length > 0">
      <p>We associate with</p>
      <v-chip variant="outlined" :color="ass.color" v-for="(ass, assId) in data.associations" :key="assId">
        <span>{{ ass.name }}</span>
      </v-chip>
    </div>
  </v-card>

  <EventsList :events="data.upcomingClubEvents" :show-upcoming-header="true" :filename="filename"></EventsList>
</template>

<style scoped>
.map-view {
  height: 600px;
  width: 800px;
  margin: auto;
}

@media screen and (max-width: 800px) {
  .map-view {
    height: 380px;
    width: calc(100% - 20px);
  }

  :deep() .marker-dialog {
    top: 0 !important;
    left: 0 !important;
    margin: 0 calc((100% - 400px) / 2) !important;
  }

  :deep() .marker-dialog .v-row {
    margin-top: 0;
  }

  :deep() .marker-dialog .v-card-text {
    padding-top: 0 !important;
  }

  :deep() .marker-dialog .v-container {
    padding: 0;
  }
}

.v-chip {
  margin-left: 5px;
}

.hline {
  margin: 5px 0;
  border-bottom: 1px rgba(var(--v-theme-surface), 0.87) solid;
}

.v-chip.text-black {
  background-color: rgba(255, 255, 255, 0.8);
}

:deep() .marker-dialog {
  position: absolute;
  top: 20px;
  left: calc(50% - 25px);
}

@media screen and (max-width: 400px) {
  :deep() .marker-dialog {
    top: 0 !important;
    left: 0 !important;
    margin: 0 2px !important;
    width: calc(100% - 4px) !important;
    max-width: calc(100% - 4px) !important;
  }

  .map-view {
    width: 100%;
  }
}

.v-list {
  background: rgba(var(--v-theme-background));
  color: rgba(var(--v-theme-surface));
  overflow: unset;
}

.header {

  & :deep() .v-card-title {
    font-size: 2.25rem;
    white-space: break-spaces;
    line-height: 3rem;
  }
}
</style>