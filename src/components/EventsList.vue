<script setup lang="ts">
  import {format, isAfter, subDays} from 'date-fns';
  import {ClubEvents, ClubEvent} from '../assets/events.db.ts';
  import {Clubs, Club} from '../assets/clubs.db.ts'

  /**
   * Filters events that are happening today and later.
   */
  const upcomingClubEvents = ClubEvents.filter((ev) => isAfter(ev.date, subDays(new Date(), 1)));

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  function getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/?mlat=${ev.lat}&mlon=${ev.long}#map=18/${ev.lat}/${ev.long}`
  }

  /**
   * Gets the registration, if it exists, otherwise empty string.
   * @param ev - the club event
   * @returns the URL.
   */
  function getRegistrationLink(ev: ClubEvent): string {
    const foundClub = Clubs.find((item:Club) => item.id === ev.clubId);
    return foundClub ? foundClub.url : '';
  }

  /**
   * Gets the club name where one should register.
   * @param ev - the club event
   * @returns the club's name.
   */
  function getRegistrationName(ev: ClubEvent): string {
    const foundClub = Clubs.find((item:Club) => item.id === ev.clubId);
    return foundClub ? foundClub.name : '';
  }
</script>

<template>
  <div>
    <ul>
      <li v-for="ev in upcomingClubEvents">
        <span style="font-weight: bold">{{ev.name}}</span><br>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
        <span v-if="ev.clubId">Registration at <a :href="getRegistrationLink(ev)" target="_blank">{{getRegistrationName(ev)}}</a></span>
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
