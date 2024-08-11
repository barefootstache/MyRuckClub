<script setup lang="ts">
import { format } from 'date-fns';
import { Contact, ClubEvent, Club, PLACEHOLDER_CLUB } from '@/business-logic';
import { LocationService, TursoService } from '@/services';
import { EventUtils, ClubUtils } from '@/business-logic/index.utils';
import { computedAsync } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    event: ClubEvent;
    useLogo?: boolean;
  }>(),
  {
    useLogo: false,
  }
);

const club = computedAsync<Club>(async () => {
  const response = await TursoService.getClubById(props.event.clubId);
  return response;
}, PLACEHOLDER_CLUB);

/**
 * Gets the registration, if it exists, otherwise empty string.
 * @param ev - the club event
 * @returns the URL.
 */
function getRegistrationLink(ev: ClubEvent): string {
  return (
    EventUtils.getMostRecentData<string>('url', club.value, ev) ||
    ClubUtils.getContactUrl(club.value?.contact as Contact) ||
    ''
  );
}

/**
 * Gets the profile logo link of the club, if it has one, otherwise uses the default.
 * @param ev - the club event
 * @returns the URL.
 */
function getProfileLogoLink(): string {
  if (club.value.hasLogo) {
    return `clubs/${club.value.id}-logo.jpg`;
  } else {
    return `clubs/myruckclub-logo.png`;
  }
}
</script>

<template>
  <v-list-item>
    <template #prepend v-if="useLogo">
      <router-link :to="{ name: 'Club', params: { id: event.clubId } }">
        <v-avatar :image="getProfileLogoLink()" size="90"> </v-avatar>
      </router-link>
    </template>
    <template #prepend v-else-if="event.type !== 'default'">
      <v-avatar :image="EventUtils.getIcon(event.type)" size="80"> </v-avatar>
    </template>
    <template #title>
      <span style="font-weight: bold">{{ event.name }}</span
      ><br />
    </template>
    <template #subtitle>
      <span>{{ format(event.date, 'EEEE dd.MM.yyyy') }}</span
      ><br />
      <span
        >{{ event.time }} -
        <a :href="LocationService.getLocationUrl(event)" target="_blank">{{
          event.location
        }}</a></span
      ><br />
      <span v-if="event.clubId"
        >Registration at
        <a :href="getRegistrationLink(event)" target="_blank">{{
          club.name
        }}</a></span
      >
    </template>
  </v-list-item>
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
</style>