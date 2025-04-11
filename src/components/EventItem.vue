<script setup lang="ts">
import { format } from 'date-fns';
import { Contact, ClubEvent, PLACEHOLDER_CLUB } from '@/business-logic';
import { LocationService, TursoService, UtilsService } from '@/services';
import { EventUtils, ClubUtils } from '@/business-logic/index.utils';
import { onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    event: ClubEvent;
    useLogo?: boolean;
  }>(),
  {
    useLogo: false,
  }
);

const data = ref(PLACEHOLDER_CLUB);

onMounted(async () => {
  const club = await TursoService.getClubByIdV2(props.event.clubId);
  data.value = club;
});

/**
 * Gets the registration, if it exists, otherwise empty string.
 * @param ev - the club event
 * @returns the URL.
 */
function getRegistrationLink(ev: ClubEvent): string {
  return (
    EventUtils.getMostRecentData<string>('url', data.value, ev) ||
    ClubUtils.getContactUrl(data.value?.contact as Contact) ||
    ''
  );
}

/**
 * Gets the profile logo link of the club, if it has one, otherwise uses the default.
 * @param ev - the club event
 * @returns the URL.
 */
function getProfileLogoLink(): string {
  if (data.value.hasLogo) {
    return `clubs/${data.value.id}-logo.jpg`;
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
      <v-icon icon="mdi-card-account-details-outline"></v-icon><span style="font-weight: bold">{{ event.name }}</span>
    </template>
    <template #subtitle>
      <p><v-icon icon="mdi-calendar-month"></v-icon>{{ format(event.date, 'EEEE dd.MM.yyyy') }}</p>
      <p><v-icon :icon="UtilsService.getClockTimeIcon(event.time)"></v-icon>{{ event.time }}</p>
      <p><v-icon icon="mdi-map-marker"></v-icon>
        <a :href="LocationService.getLocationUrl(event)" target="_blank">{{
          event.location
          }}</a>
      </p>
      <p v-if="event.clubId"><v-icon icon="mdi-draw"></v-icon>Registration at
        <a :href="getRegistrationLink(event)" target="_blank">{{
          data.name
          }}</a>
      </p>
    </template>
  </v-list-item>
</template>

<style scoped>
.v-list-item {
  outline: 1px rgba(var(--v-theme-surface), 0.87) solid;
  margin-bottom: 4px;
  padding: 0 4px;
}

.v-list-item-subtitle p {
  line-height: 1.5;
  font-size: 1rem;
}

.v-icon {
  margin: 0 8px;
}
</style>