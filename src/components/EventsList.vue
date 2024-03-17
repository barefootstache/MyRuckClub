<script setup lang="ts">
  import {format, isAfter, subDays} from 'date-fns';
  import { EventsDB } from '@/db/index.db'
  import { ClubEvent } from '@/business-logic/events.model';
  import { Contact } from '@/business-logic/contact.model';
  import { getContactUrl, getClubById } from '@/business-logic/clubs.utils';
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
    const foundClub = getClubById(ev.clubId);
    return getMostRecentData<string>('url', foundClub, ev) || getContactUrl(foundClub?.contact as Contact) || '';
  }

  /**
   * Gets the club name where one should register.
   * @param ev - the club event
   * @returns the club's name.
   */
  function getRegistrationName(ev: ClubEvent): string {
    const foundClub = getClubById(ev.clubId);
    return foundClub ? foundClub.name : '';
  }

  /**
   * Gets the profile logo link of the club, if it has one, otherwise uses the default.
   * @param ev - the club event
   * @returns the URL.
   */
  function getProfileLogoLink(ev: ClubEvent): string {
    const foundClub = getClubById(ev.clubId);
    if(foundClub.hasLogo) {
      return `clubs/${ev.clubId}-logo.jpg`;
    } else {
      return `clubs/myruckclub-logo.png`;
    }
  }
</script>

<template>
  <div style="margin: 5px 0;">
    <span style="font-size: 1.3rem;">All times are local times.</span>
  </div>

  <v-list :lines="false">
    <v-list-item v-for="ev in upcomingClubEvents">
      <template v-slot:prepend>
        <v-avatar :image="getProfileLogoLink(ev)" size="90">
        </v-avatar>
      </template>
      <template v-slot:title>
        <span style="font-weight: bold">{{ev.name}}</span><br>
      </template>
      <template v-slot:subtitle>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="LocationService.getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
        <span v-if="ev.clubId">Registration at <a :href="getRegistrationLink(ev)" target="_blank">{{getRegistrationName(ev)}}</a></span>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>
  .v-list-item {
    outline: 1px rgba(var(--v-theme-surface), 0.87) solid;
    margin-bottom: 4px;
    padding: 0 4px;
  }

  .v-list-item-subtitle span {
    line-height: 1.5;
    font-size: 1rem;
  }

  .v-list {
    background: rgba(var(--v-theme-background));
    color: rgba(var(--v-theme-surface));
    overflow: unset;
  }
</style>
