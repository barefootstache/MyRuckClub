<script setup lang="ts">
  import {format} from 'date-fns';
  import {ClubEvents, ClubEvent} from '../assets/events.db.ts';
  import {Clubs, Club} from '../assets/clubs.db.ts'

  function getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/#map=18/${ev.lat}/${ev.long}`
  }

  function getRegistrationLink(ev: ClubEvent): string {
    const foundClub = Clubs.find((item:Club) => item.id === ev.clubId);
    return foundClub ? foundClub.url : '';
  }

  function getRegistrationName(ev: ClubEvent): string {
    const foundClub = Clubs.find((item:Club) => item.id === ev.clubId);
    return foundClub ? foundClub.name : '';
  }
</script>

<template>
  <div>
    <h2>Upcoming Events</h2>
    <ul>
      <li v-for="ev in ClubEvents">
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
