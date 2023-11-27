<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import {Club, Clubs} from '../../assets/clubs.db.ts';
  import { ClubEvent, ClubEvents } from '../../assets/events.db';
  import { format, isAfter, subDays } from 'date-fns';

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
  const upcomingClubEvents = ClubEvents.filter((item) => item.clubId === club.id).filter((item) => isAfter(item.date, subDays(new Date(), 1)));

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  function getLocationClubUrl(ev: Club): string {
    if(!ev.default){
      return '#';
    } else {
      return `https://www.openstreetmap.org/?mlat=${ev.default.lat}&mlon=${ev.default.long}#map=18/${ev.default.lat}/${ev.default.long}`
    }
  }

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  function getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/?mlat=${ev.lat}&mlon=${ev.long}#map=18/${ev.lat}/${ev.long}`
  }
</script>

<template>
  <div>
    <h2>{{club.name}}</h2>
    <p>We typically meet at <a :href="getLocationClubUrl(club)" target="_blank">{{club?.default?.location || 'TBA'}}</a>.</p>
    <p>For more info contact us on <a :href="club.url">Instagram</a>.</p>
    <h3><span v-if="upcomingClubEvents.length === 0">No </span>Upcoming Events</h3>
    
    <ul>
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
}
</style>
