<script setup lang="ts">
import { computed, ref } from 'vue';
import EventsList from '@/components/EventsList.vue';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlScale,
  LIcon,
} from '@vue-leaflet/vue-leaflet';
import { LocationService, TursoService } from '@/services';
import { OsmUtils } from '@/business-logic/index.utils';
import MarkerDialog from '@/components/MarkerDialog.vue';
import { Club, ClubEvent } from '@/business-logic';
import { computedAsync } from '@vueuse/core';

const zoom = document.documentElement.clientWidth < 800 ? 5 : 6;

const visible = ref(false);
const markerDialog = ref();

const futureEvents = computedAsync<ClubEvent[]>(
  async () => await TursoService.getFutureEvents(),
  []
);

const uniqueEventsLocations = computedAsync<ClubEvent[]>(
  async () => LocationService.getUniqueEventsLocations(futureEvents.value),
  []
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

const $ = computed(() => ({uniqueEventsLocations: uniqueEventsLocations.value, futureEvents: futureEvents.value}))
</script>

<template>
  <div>
    <h2>Upcoming Events</h2>

    <div class="map-view">
      <l-map ref="map" v-model:zoom="zoom" :center="[50.785, 9.547]">
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
          @click="showDialog(true, ev)"
          v-for="ev in $.uniqueEventsLocations"
          :lat-lng="ev.coordinates"
        >
          <l-icon
            :icon-url="OsmUtils.getPin(ev.type).options.iconUrl"
            :icon-size="OsmUtils.getPin(ev.type).options.iconSize"
            :icon-anchor="OsmUtils.getPin(ev.type).options.iconAnchor"
          ></l-icon>
        </l-marker>

        <v-dialog
          v-model="visible"
          :scrim="false"
          content-class="marker-dialog"
        >
          <MarkerDialog :details="markerDialog"></MarkerDialog>
        </v-dialog>
      </l-map>
    </div>

    <EventsList
      :events="$.futureEvents"
      :show-local-times="true"
      :use-logo="true"
    ></EventsList>
  </div>
</template>

<style scoped>
.map-view {
  height: 600px;
  width: 800px;
  margin: auto;
  margin-bottom: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
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
</style>