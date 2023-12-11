<script setup lang="ts">
  import EventsList from '@/components/EventsList.vue'
  import { isAfter, subDays } from 'date-fns';
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { EventsDB } from '@/db/index.db';
  import { LocationService } from '@/services/location.service';
  import { getPin } from '@/business-logic/osm.utils';

  const zoom = document.documentElement.clientWidth < 800 ? 5 : 6; 

  const upcomingClubEvents = EventsDB.filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = LocationService.getUniqueEventsLocations(upcomingClubEvents);
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

        <l-marker v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getPin(ev.type)"> </l-marker>
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
}
</style>
