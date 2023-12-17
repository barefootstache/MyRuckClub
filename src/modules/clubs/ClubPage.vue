<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { format, isAfter, subDays } from 'date-fns';
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { ClubsDB } from '@/db/index.db';
  import { Club } from '@/business-logic/clubs.model';
  import { EventsDB } from '@/db/index.db';
  import { getPin } from '@/business-logic/osm.utils';
  import { LocationService } from '@/services/location.service';
  import { ClubEvent } from '@/business-logic/events.model';
  import { getAssociationByType } from '@/business-logic/associations.utils'
  import Contact from './components/Contact.vue'

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
  const upcomingClubEvents = EventsDB.filter((item) => item.clubId === club.id).filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = LocationService.getUniqueEventsLocations(upcomingClubEvents);
  const allCoordinates = uniqueEventsLocations.map((ev:ClubEvent) => LocationService.getCoordinates(ev)).concat([club.coordinates]);
  const zoom = LocationService.calcZoom(allCoordinates);

  const associations = (club?.associations || []).map(ass => getAssociationByType(ass));
</script>

<template>
  <div>
    <h1>{{club.name}}</h1>
    <p v-if="club?.default?.location">We typically meet at <a :href="LocationService.getLocationClubUrl(club)" target="_blank">{{club?.default?.location}}</a>.</p>
    
    <div class="map-view">
      <l-map ref="map" v-model:zoom="zoom" :center="LocationService.calcCenterMap(allCoordinates)">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>

        <l-marker v-if="!club?.hide" :lat-lng="club.coordinates" :icon="getPin('default')"> </l-marker>
        <l-marker v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getPin(ev.type)"> </l-marker>
      </l-map>
    </div>

    <div class="hline"></div>

    <Contact :club="club"></Contact>

    <div class="hline"></div>

    <div v-if="associations.length > 0">
      We associate with 
      <v-chip variant="outlined" :color="ass.color" v-for="ass in associations">
        <span>{{ ass.name }}</span>
      </v-chip>
    </div>
    
    <div class="hline"></div>

    <h2><span v-if="upcomingClubEvents.length === 0">No </span>Upcoming Events</h2>
    
    <ul class="events-view">
      <li v-for="ev in upcomingClubEvents">
        <span style="font-weight: bold">{{ev.name}}</span><br>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="LocationService.getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
        <span v-if="ev.clubId">Registration at <a :href="club.contact[club.contact.preferred]" target="_blank">{{club.name}}</a></span>
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
  list-style: none;
}
.v-chip {
  margin-left: 5px;
}
.hline {
  margin: 5px 0;
  border-bottom: 1px white solid;
}
.v-chip.text-black {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
