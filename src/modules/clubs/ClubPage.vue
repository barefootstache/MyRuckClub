<script setup lang="ts">
import { computed, ref } from 'vue';
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
import { LocationService, TursoService } from '@/services';
import {
  Club,
  ClubEvent,
  Coordinates,
  PLACEHOLDER_ASSOCIATION,
  PLACEHOLDER_CLUB,
  PLACEHOLDER_BOUNDINGBOX,
  PLACEHOLDER_CLUBEVENT,
} from '@/business-logic';
import Contact from './components/Contact.vue';
import MarkerDialog from '@/components/MarkerDialog.vue';
import EventsList from '@/components/EventsList.vue';
import { computedAsync } from '@vueuse/core';

/**
 * Reference for `this.$route`.
 */
const route = useRoute();
const clubId = ref(route.params.id as string);

/**
 * Finds the referenced club by clubId.
 */
const data = computedAsync(
  async () => {
    const club = await TursoService.getClubById(clubId.value);
    const associations = await Promise.all(
      club.associations.map(
        async (ass) => await TursoService.getAssociationByType(ass)
      )
    );

    return { club, associations };
  },
  {
    club: PLACEHOLDER_CLUB,
    associations: [PLACEHOLDER_ASSOCIATION],
  }
);

/**
 * Filters events that are happening today and later.
 */
const upcomingClubEvents = computedAsync<ClubEvent[]>(
  async () => await TursoService.getEventsByClubId(clubId.value),
  [PLACEHOLDER_CLUBEVENT]
);

const uniqueEventsLocations = computedAsync<ClubEvent[]>(async () =>
  LocationService.getUniqueEventsLocations(upcomingClubEvents.value)
);

const allCoordinates = computedAsync<Coordinates[]>(async () =>
  uniqueEventsLocations.value
    .map((ev: ClubEvent) => LocationService.getCoordinates(ev))
    .concat([data.value.club.coordinates])
);

const boundingBox = computedAsync(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return LocationService.getBoundingBox(allCoordinates.value);
}, PLACEHOLDER_BOUNDINGBOX);

const visible = ref(false);
const markerDialog = ref();
const filename = ref(
  `${data.value.club.name.replace(' ', '_')}_events_calendar.ics`
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
  if (data.value.club.hasLogo) {
    return `clubs/${data.value.club.id}-logo.jpg`;
  } else {
    return `clubs/myruckclub-logo.png`;
  }
}

const $ = computed(() => ({
  data: data.value,
  boundingBox: boundingBox.value,
  uniqueEventsLocations: uniqueEventsLocations.value,
  upcomingClubEvents: upcomingClubEvents.value,
}));
</script>

<template>
  <v-card class="header" :title="$.data.club.name">
    <template #prepend>
      <v-avatar :image="getProfileLogoLink()" size="80"> </v-avatar>
    </template>
    <v-card-text v-if="$.data.club.default?.location && !$.data.club.hide"
      >We typically meet at
      <a
        :href="LocationService.getLocationClubUrl($.data.club)"
        target="_blank"
        >{{ $.data.club.default?.location }}</a
      >.</v-card-text
    >
  </v-card>

  <div class="map-view" v-if="!$.data.club.hide">
    <l-map
      ref="map"
      v-model:zoom="$.boundingBox.zoom"
      :center="[0, 0]"
      :bounds="$.boundingBox.box"
      :max-bounds="$.boundingBox.box"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      ></l-tile-layer>
      <l-control-scale
        position="bottomleft"
        :imperial="true"
        :metric="true"
      ></l-control-scale>

      <l-marker
        @click="showDialog(true, $.data.club)"
        v-if="!$.data.club.hide"
        :lat-lng="$.data.club.coordinates"
      >
        <l-icon
          :icon-url="OsmUtils.getPin('default').options.iconUrl"
          :icon-size="OsmUtils.getPin('default').options.iconSize"
          :icon-anchor="OsmUtils.getPin('default').options.iconAnchor"
        ></l-icon>
      </l-marker>

      <l-marker
        @click="showDialog(true, ev)"
        v-for="(ev, evId) in $.uniqueEventsLocations"
        :key="evId"
        :lat-lng="ev.coordinates"
      >
        <l-icon
          :icon-url="OsmUtils.getPin(ev.type).options.iconUrl"
          :icon-size="OsmUtils.getPin(ev.type).options.iconSize"
          :icon-anchor="OsmUtils.getPin(ev.type).options.iconAnchor"
        ></l-icon>
      </l-marker>

      <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
        <MarkerDialog :details="markerDialog"></MarkerDialog>
      </v-dialog>
    </l-map>
  </div>

  <div class="hline"></div>

  <Contact :club="$.data.club"></Contact>

  <div class="hline"></div>

  <div v-if="$.data.associations?.length > 0">
    <p>We associate with</p>
    <v-chip
      variant="outlined"
      :color="ass.color"
      v-for="(ass, assId) in $.data.associations"
      :key="assId"
    >
      <span>{{ ass.name }}</span>
    </v-chip>
  </div>

  <div class="hline"></div>

  <EventsList
    :events="$.upcomingClubEvents"
    lines="three"
    :show-upcoming-header="true"
    :filename="filename"
  ></EventsList>
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
  &.v-card {
    background: rgba(var(--v-theme-background));
    color: rgba(var(--v-theme-surface));
  }

  & :deep() .v-card-title {
    font-size: 2.25rem;
    white-space: break-spaces;
    line-height: 3rem;
  }
}
</style>
