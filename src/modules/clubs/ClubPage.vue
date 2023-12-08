<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { format, isAfter, subDays } from 'date-fns';
  import { unique } from 'radash'
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { Clubs } from '../../db/clubs.db';
  import { Club, Coordinates } from '../../business-logic/clubs.model';
  import { EventsDB } from '../../db/index.db';
  import { ClubEvent } from '../../business-logic/events.model';

  /**
   * Reference for `this.$route`.
   */
  const route = useRoute();

  /**
   * Finds the referenced club by clubId.
   */
  const club = Clubs.find((item) => item.id === route.params.id) as Club;

  /**
   * Filters events that are happening today and later.
   */
  const upcomingClubEvents = EventsDB.filter((item) => item.clubId === club.id).filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = getUniqueEventsLocations(upcomingClubEvents);
  const allCoordinates = uniqueEventsLocations.map(ev => getCoordinates(ev)).concat([club.coordinates]);
  const zoom = calcZoom(allCoordinates);

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  function getLocationClubUrl(ev: Club): string {
    if(!ev.default){
      return '#';
    } else {
      return `https://www.openstreetmap.org/?mlat=${ev.default.coordinates[0]}&mlon=${ev.default.coordinates[1]}#map=18/${ev.default.coordinates[0]}/${ev.default.coordinates[1]}`
    }
  }

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  function getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/?mlat=${ev.coordinates[0]}&mlon=${ev.coordinates[1]}#map=18/${ev.coordinates[0]}/${ev.coordinates[1]}`
  }

  /** 
   * Gets the coordinates of an club event.
   * @param ev - the club event.
   * @returns the coordinates.
   */
  function getCoordinates(ev: ClubEvent): Coordinates {
    return ev.coordinates;
  }

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


  const ruckIcon = L.icon({
    iconUrl: '/ruck_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

  const hqIcon = L.icon({
    iconUrl: '/hq_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

  const ptIcon = L.icon({
    iconUrl: '/pt_pin.png',
    iconSize: [40, 60],
    iconAnchor: [20, 60]
  })

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

  /** 
   * Calculates the zoom relative to all provided coordinates.
   * @param coordinates - the coordinates
   * @returns the zoom.
   */
  function calcZoom(coordinates: Coordinates[]): number {
    const initialZoom = 16;
    const adjustSmallWindow = document.documentElement.clientWidth < 800 ? 1 : 0;
    // Extract latitude and longitude arrays
    const latitudes = coordinates.map(coord => coord[0]);
    const longitudes = coordinates.map(coord => coord[1]);

    // Calculate the delta coordinates
    const deltaLatitude = Math.abs(Math.max(...latitudes)) - Math.abs(Math.min(...latitudes));
    const deltaLongitude = Math.abs(Math.max(...longitudes)) - Math.abs(Math.min(...longitudes));
    
    const x = deltaLongitude * 1000;
    const y = deltaLatitude * 1000;
    const distance = Math.sqrt(x * x + y * y);

    // Return the zoom
    return initialZoom - (coordinates.length - 1) - Math.floor(distance / 50) - adjustSmallWindow;
  }

  /** 
   * Calculates the center of the map.
   * @param coordinates - the coordinates to center over
   * @returns the centered coordinates.
   */
  function calcCenterMap(coordinates: Coordinates[]): Coordinates {
    // Extract latitude and longitude arrays
    const latitudes = coordinates.map(coord => coord[0]);
    const longitudes = coordinates.map(coord => coord[1]);

    // Calculate the center coordinates
    const centerLatitude = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;
    const centerLongitude = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;
    
    // Return the center coordinates
    return [centerLatitude, centerLongitude];
  }

</script>

<template>
  <div>
    <h2>{{club.name}}</h2>
    <p>We typically meet at <a :href="getLocationClubUrl(club)" target="_blank">{{club?.default?.location || 'TBA'}}</a>.</p>
    
    <div class="map-view">
      <l-map ref="map" v-model:zoom="zoom" :center="calcCenterMap(allCoordinates)">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>

        <l-marker v-if="!club?.hide" :lat-lng="club.coordinates" :icon="hqIcon"> </l-marker>
        <l-marker v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getIconFromType(ev)"> </l-marker>
      </l-map>
    </div>

    <p v-if="club.url.includes('instagram')">For more info contact us on <a :href="club.url">Instagram</a>.</p>
    <p v-if="!club.url.includes('instagram')">For more info contact us at our <a :href="club.url">Homepage</a>.</p>

    <h3><span v-if="upcomingClubEvents.length === 0">No </span>Upcoming Events</h3>
    
    <ul class="events-view">
      <li v-for="ev in upcomingClubEvents">
        <span style="font-weight: bold">{{ev.name}}</span><br>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
        <span v-if="ev.clubId">Registration at <a :href="club.url" target="_blank">{{club.name}}</a></span>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  outline: 1px solid;
  margin-bottom: 4px;
  padding: 0 4px;
}
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
}
.events-view {
  margin: auto;
  padding: 0;
}
</style>
