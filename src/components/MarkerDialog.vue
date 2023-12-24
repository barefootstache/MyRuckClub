<script setup lang="ts">
  import { ref } from 'vue'
  import { Club } from '@/business-logic/clubs.model'
  import { ClubEvent } from '@/business-logic/events.model';
  import { getContactUrl } from '@/business-logic/clubs.utils';
  import { LocationService } from '@/services/location.service';
  import { format } from 'date-fns';
  import { getMostRecentData } from '@/business-logic/events.utils';
  import { ClubsDB } from '@/db/index.db'
  import { Contact } from '@/business-logic/contact.model';

  const props = defineProps<{
    details: Club|ClubEvent
  }>();

  const card = ref({
    title: props.details.name ?? '',
    subtitle: (props.details as Club)?.country ?? (props.details as ClubEvent)?.type.toString().toUpperCase() ?? '',
    text: '',
    registrationLink: (props.details as Club)?.contact ? getContactUrl((props.details as Club)?.contact) : getRegistrationLink(props.details as ClubEvent) ?? '',
    isEvent: !!(props.details as ClubEvent)?.type,
    date: (props.details as ClubEvent)?.date ?? '',
    time: (props.details as ClubEvent)?.time ?? '',
    location: (props.details as ClubEvent)?.location ?? '',
    locationLink: (props.details as ClubEvent)?.coordinates ? LocationService.getLocationUrl(props.details as ClubEvent) : '#'
  });

  /**
   * Gets the registration, if it exists, otherwise empty string.
   * @param ev - the club event
   * @returns the URL.
   */
  function getRegistrationLink(ev: ClubEvent): string {
    const foundClub = ClubsDB.find((item:Club) => item.id === ev.clubId);
    return getMostRecentData<string>('url', foundClub, ev) || getContactUrl(foundClub?.contact as Contact) || '';
  }
</script>

<template>
  <v-card color="indigo" width="400" variant="flat">
    <template #title>
      {{ card.title }}
    </template>

    <template #subtitle>
      {{ card.subtitle }}
    </template>

    <template #text>
      <div v-if="!card.isEvent">{{ card.text }}</div>
       
      <v-container v-if="card.isEvent">
        <v-row>
          <v-col class="v-col-4">Time</v-col>
          <v-col>{{ card.time }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-4">Date</v-col>
          <v-col>{{ format(card.date, 'EEEE dd.MM.yyyy') }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-4">Location</v-col>
          <v-col><a :href="card.locationLink" target="_blank">{{ card.location }}</a></v-col>
        </v-row>
      </v-container>
    </template>

    <template #actions class="justify-space-between">
      <v-spacer></v-spacer>
      <v-btn :href="card.registrationLink" target="_blank">Ruck Up</v-btn>
    </template>
  </v-card>
</template>

<style scoped>
</style>
