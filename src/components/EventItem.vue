<script setup lang="ts">
import { format } from 'date-fns';
import { Contact, ClubEvent, PLACEHOLDER_CLUB } from '@/business-logic';
import { LocationService, UtilsService } from '@/services';
import { EventUtils, ClubUtils } from '@/business-logic/index.utils';
import { onMounted, ref } from 'vue';
import { useClubsStore } from '@/stores/clubs.store';

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
const store = useClubsStore();

onMounted(async () => {
  await store.registerClubsList();
  const club = store.getClubById(props.event.clubId);
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
</script>

<template>
  <v-list-item>
    <template #prepend v-if="useLogo">
      <router-link :to="{ name: 'Club', params: { id: event.clubId } }">
        <v-avatar :image="ClubUtils.getLogo(data)" size="90"> </v-avatar>
      </router-link>
    </template>
    <template #prepend v-else-if="event.type !== 'default'">
      <v-avatar :image="EventUtils.getIcon(event.type)" size="80"> </v-avatar>
    </template>
    <template #title>
      <p style="font-weight: bold"><v-icon icon="mdi-card-account-details-outline"></v-icon> {{ event.name }}</p>
    </template>
    <template #subtitle>
      <p><v-icon icon="mdi-calendar-month"></v-icon>{{ format(event.date, 'EEEE dd.MM.yyyy') }}</p>
      <p><v-icon :icon="UtilsService.getClockTimeIcon(event.time)"></v-icon>{{ event.time }}</p>
      <p><v-icon icon="mdi-timer-sand"></v-icon>{{ UtilsService.durationToString(event.duration) }}</p>
      <p><v-icon icon="mdi-map-marker"></v-icon>
        <a :href="LocationService.getLocationUrl(event)" target="_blank">{{
          event.location
        }}<v-icon icon="mdi-open-in-new" size="x-small"></v-icon></a>
      </p>
      <p v-if="event.clubId"><v-icon icon="mdi-draw"></v-icon>Registration at
        <a :href="getRegistrationLink(event)" target="_blank">{{
          data.name
        }}<v-icon icon="mdi-open-in-new" size="x-small"></v-icon></a>
      </p>
    </template>
  </v-list-item>
</template>

<style scoped>
.v-list-item {
  margin-bottom: 4px;
  padding: 0 4px;
}

.v-list-item-title {
  white-space: normal;
  word-break: break-word;
}

.v-list-item-subtitle p {
  line-height: 1.5;
  font-size: 1rem;
}

.v-icon {
  margin: 0 8px;
}
</style>