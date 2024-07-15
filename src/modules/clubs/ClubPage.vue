<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { isAfter, subDays } from 'date-fns';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlScale,
  LIcon,
} from '@vue-leaflet/vue-leaflet';
import { ClubsDB, EventsDB } from '@/db/index.db';
import { OsmUtils, AssociationUtils } from '@/business-logic/index.utils';
import { LocationService } from '@/services';
import { Club, ClubEvent } from '@/business-logic';
import Contact from './components/Contact.vue';
import MarkerDialog from '@/components/MarkerDialog.vue';
import EventsList from '@/components/EventsList.vue';

/**
 * Reference for `this.$route`.
 */
const route = useRoute();

/**
 * Finds the referenced club by clubId.
 */
const club = ClubsDB.find((item) => item.id === route.params.id) as Club;

/**
 * Filters events that are happening today and later.
 */
const upcomingClubEvents = EventsDB.filter(
  (item) => item.clubId === club.id
).filter((item) => isAfter(item.date, subDays(new Date(), 1)));

const uniqueEventsLocations =
  LocationService.getUniqueEventsLocations(upcomingClubEvents);

const allCoordinates = uniqueEventsLocations
  .map((ev: ClubEvent) => LocationService.getCoordinates(ev))
  .concat([club.coordinates]);

const boundingBox = LocationService.getBoundingBox(allCoordinates);

const associations = (club?.associations || []).map((ass) =>
  AssociationUtils.getAssociationByType(ass)
);

const visible = ref(false);
const markerDialog = ref();
const filename = ref(`${club.name.replace(' ', '_')}_events_calendar.ics`);

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
  if (club.hasLogo) {
    return `clubs/${club.id}-logo.jpg`;
  } else {
    return `clubs/myruckclub-logo.png`;
  }
}
</script>

<template>
  <v-card class="header" :title="club.name">
    <template #prepend>
      <v-avatar :image="getProfileLogoLink()" size="80"> </v-avatar>
    </template>
    <v-card-text v-if="club?.default?.location && !club?.hide"
      >We typically meet at
      <a :href="LocationService.getLocationClubUrl(club)" target="_blank">{{
        club?.default?.location
      }}</a
      >.</v-card-text
    >
  </v-card>

  <div class="map-view" v-if="!club?.hide">
    <l-map
      ref="map"
      v-model:zoom="boundingBox.zoom"
      :center="[0, 0]"
      :bounds="boundingBox.box"
      :max-bounds="boundingBox.box"
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
        @click="showDialog(true, club)"
        v-if="!club?.hide"
        :lat-lng="club.coordinates"
      >
        <l-icon
          :icon-url="OsmUtils.getPin('default').options.iconUrl"
          :icon-size="OsmUtils.getPin('default').options.iconSize"
          :icon-anchor="OsmUtils.getPin('default').options.iconAnchor"
        ></l-icon>
      </l-marker>

      <l-marker
        @click="showDialog(true, ev)"
        v-for="(ev, evId) in uniqueEventsLocations"
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

  <Contact :club="club"></Contact>

  <div class="hline"></div>

  <div v-if="associations.length > 0">
    <p>We associate with</p>
    <v-chip
      variant="outlined"
      :color="ass.color"
      v-for="(ass, assId) in associations"
      :key="assId"
    >
      <span>{{ ass.name }}</span>
    </v-chip>
  </div>

  <div class="hline"></div>

  <EventsList
    :events="upcomingClubEvents"
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