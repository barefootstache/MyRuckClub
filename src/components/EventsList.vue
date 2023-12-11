<script setup lang="ts">
  import {format, isAfter, subDays} from 'date-fns';
  import { ClubsDB, EventsDB } from '@/db/index.db'
  import { ClubEvent } from '@/business-logic/events.model';
  import { Club } from '@/business-logic/clubs.model';
  import { getMostRecentData } from '@/business-logic/events.utils';
  import { LocationService } from '@/services/location.service';

  /**
   * Filters events that are happening today and later.
   */
  const upcomingClubEvents = EventsDB.filter((ev) => isAfter(ev.date, subDays(new Date(), 1)));

  /**
   * Gets the registration, if it exists, otherwise empty string.
   * @param ev - the club event
   * @returns the URL.
   */
  function getRegistrationLink(ev: ClubEvent): string {
    const foundClub = ClubsDB.find((item:Club) => item.id === ev.clubId);
    return getMostRecentData<string>('url', foundClub, ev) || foundClub?.url || '';
  }

  /**
   * Gets the club name where one should register.
   * @param ev - the club event
   * @returns the club's name.
   */
  function getRegistrationName(ev: ClubEvent): string {
    const foundClub = ClubsDB.find((item:Club) => item.id === ev.clubId);
    return foundClub ? foundClub.name : '';
  }
</script>

<template>
  <div>
    <ul class="events-view">
      <li v-for="ev in upcomingClubEvents">
        <span style="font-weight: bold">{{ev.name}}</span><br>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="LocationService.getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
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
  padding: 0 4px;
}
.events-view {
  margin: auto;
  padding: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
}
</style>
