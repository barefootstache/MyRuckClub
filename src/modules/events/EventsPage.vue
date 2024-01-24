<script setup lang="ts">
  import { ref } from 'vue'
  import EventsList from '@/components/EventsList.vue'
  import { isAfter, subDays } from 'date-fns';
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { EventsDB } from '@/db/index.db';
  import { LocationService } from '@/services/location.service';
  import { getPin } from '@/business-logic/osm.utils';
  import MarkerDialog from '@/components/MarkerDialog.vue';
  import { Club } from '@/business-logic/clubs.model';
  import { ClubEvent } from '@/business-logic/events.model';

  const zoom = document.documentElement.clientWidth < 800 ? 5 : 6; 

  const upcomingClubEvents = EventsDB.filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = LocationService.getUniqueEventsLocations(upcomingClubEvents);

  const visible = ref(false);
  const markerDialog = ref();

  /**
   * Shows the marker dialog.
   * @param value - the visibility of the dialog
   * @param body - the details of the dialog body
   */
  function showDialog(value: boolean, body: Club|ClubEvent):void {
    visible.value = value;
    markerDialog.value = body;
  }
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

        <l-marker @click="showDialog(true, ev)" v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getPin(ev.type)"> </l-marker>

        <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
          <MarkerDialog :details="markerDialog"></MarkerDialog>
        </v-dialog>
      </l-map>
    </div>
    <EventsList></EventsList>
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
    margin: 0 calc((100% - 400px)/2) !important;
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
