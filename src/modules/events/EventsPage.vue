<script setup lang="ts">
  import EventsList from '../../components/EventsList.vue'
  import { isAfter, subDays } from 'date-fns';
  import { unique } from 'radash'
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { EventsDB } from '../../db/index.db';
  import { ClubEvent } from '../../business-logic/events.model';

  const zoom = document.documentElement.clientWidth < 800 ? 5 : 6; 

  const ruckIcon = L.icon({
    iconUrl: '/ruck_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

  const ptIcon = L.icon({
    iconUrl: '/pt_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

  const hqIcon = L.icon({
    iconUrl: '/hq_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

  const upcomingClubEvents = EventsDB.filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = getUniqueEventsLocations(upcomingClubEvents);

  /** 
   * Gets the unique events based off their lat/long data.
   * @param evs - the club events
   * @returns the unique club events.
   */
  function getUniqueEventsLocations(evs: ClubEvent[]): ClubEvent[] {
    if(evs.length <= 1){
      return evs;
    }
    return unique(evs, e => `${e.coordinates}`);
  }

  /** 
   * Gets the icon relative to the event type.
   * @param ev - the club event
   * @returns the icon.
   */
  function getIconFromType(ev: ClubEvent): L.Icon {
    switch (ev.type) {
      case 'pt':
        return ptIcon;
      case 'ruck':
        return ruckIcon;
      case 'default':
        return hqIcon;
    }
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

        <l-marker v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getIconFromType(ev)"> </l-marker>
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
@media screen and (max-width: 800px) {
  .map-view {
    height: 380px;
    width: calc(100% - 20px);
  }
}
</style>
