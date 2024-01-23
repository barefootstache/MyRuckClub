<script setup lang="ts">
  import { ref } from 'vue'
  import { Club } from '@/business-logic/clubs.model'
  import { ClubEvent } from '@/business-logic/events.model';
  import { getContactUrl } from '@/business-logic/clubs.utils';
  import { LocationService } from '@/services/location.service';
  import { UtilsService } from '@/services/utils.service';
  import { format } from 'date-fns';
  import { getMostRecentData } from '@/business-logic/events.utils';
  import { ClubsDB } from '@/db/index.db'
  import { Contact } from '@/business-logic/contact.model';
  import { getIcon, convertContactToArray } from '@/business-logic/contact.utils'

  const props = defineProps<{
    details: Club|ClubEvent,
    redirect?: boolean,
    buttonLabel?: string
  }>();

  const card = ref({
    title: props.details.name ?? '',
    subtitle: (props.details as Club)?.country ?? (props.details as ClubEvent)?.type.toString().toUpperCase() ?? '',
    text: '',
    id: (props.details as Club)?.id ?? (props.details as ClubEvent)?.clubId ?? '#',
    contact: (props.details as Club)?.contact ?? '',
    contactPreferred: (props.details as Club)?.contact?.preferred ?? 'o',
    registrationLink: (props.details as Club)?.contact ? getContactUrl((props.details as Club)?.contact) : getRegistrationLink(props.details as ClubEvent) ?? '',
    isEvent: !!(props.details as ClubEvent)?.type,
    date: (props.details as ClubEvent)?.date ?? '',
    time: (props.details as ClubEvent)?.time ?? '',
    location: (props.details as ClubEvent)?.location ?? '',
    locationLink: (props.details as ClubEvent)?.coordinates ? LocationService.getLocationUrl(props.details as ClubEvent) : '#'
  });

  const buttonLabel = ref(props?.buttonLabel ?? 'Ruck Up');

  /**
   * Gets the registration, if it exists, otherwise empty string.
   * @param ev - the club event
   * @returns the URL.
   */
  function getRegistrationLink(ev: ClubEvent): string {
    const foundClub = ClubsDB.find((item:Club) => item.id === ev.clubId);
    return getMostRecentData<string>('url', foundClub, ev) || getContactUrl(foundClub?.contact as Contact) || '';
  }

  const resultArray = convertContactToArray(card.value.contact);
</script>

<template>
  <v-card color="primary" width="400" variant="flat">
    <template #title>
      {{ card.title }}
    </template>

    <template #subtitle>
      {{ card.subtitle }}
    </template>

    <template #text>
      <v-container v-if="!card.isEvent">
        <v-row v-if="card.text">
          <v-col class="v-col-1"><v-icon icon="mdi-text-account"></v-icon></v-col>
          <v-col>{{ card.text }}</v-col>
        </v-row>
      </v-container>
       
      <v-container v-if="card.isEvent">
        <v-row>
          <v-col class="v-col-1"><v-icon :icon="UtilsService.getClockTimeIcon(card.time)"></v-icon></v-col>
          <v-col>{{ card.time }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-1"><v-icon icon="mdi-calendar"></v-icon></v-col>
          <v-col>{{ format(card.date, 'EEEE dd.MM.yyyy') }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-1"><v-icon icon="mdi-map-marker"></v-icon></v-col>
          <v-col><a :href="card.locationLink" class="text-secondary" target="_blank" style="font-weight: 600;">{{ card.location }}</a></v-col>
        </v-row>
      </v-container>
    </template>

    <template #actions class="justify-space-between">
      <div v-if="!card.isEvent">
        <v-chip variant="outlined" v-for="item in resultArray" style="margin-left: 5px">
          <a v-if="item.name" :href="item.url" target="_blank">
            <v-icon :icon="getIcon(item.name as keyof Contact)" color="white"></v-icon>
          </a>
        </v-chip>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="bg-secondary" v-if="props.redirect" :to="'/club/'+card.id">{{ buttonLabel }}</v-btn>
      <v-btn class="bg-secondary" v-if="!props.redirect" :href="card.registrationLink" target="_blank">{{ buttonLabel }}</v-btn>
    </template>
  </v-card>
</template>

<style scoped>
.v-chip.v-chip--size-default {
  padding: 0 5px;
}
</style>
