<script setup lang="ts">
import { ref } from 'vue';
import { format } from 'date-fns';
import { Club, ClubEvent, Contact } from '@/business-logic';
import { LocationService, UtilsService } from '@/services';
import {
  EventUtils,
  ContactUtils,
  ClubUtils,
} from '@/business-logic/index.utils';
import { ClubsDB } from '@/db/index.db';

const props = defineProps<{
  details: Club | ClubEvent;
  redirect?: boolean;
  buttonLabel?: string;
}>();

const card = ref({
  title: props.details.name ?? '',
  subtitle:
    (props.details as Club)?.country ??
    ClubUtils.getClubById((props.details as ClubEvent)?.clubId).name ??
    '',
  text: '',
  activity: (props.details as ClubEvent)?.type
    ? (props.details as ClubEvent)?.type.toString().toUpperCase() ?? ''
    : '',
  id:
    (props.details as Club)?.id ?? (props.details as ClubEvent)?.clubId ?? '#',
  contact: (props.details as Club)?.contact ?? '',
  contactPreferred: (props.details as Club)?.contact?.preferred ?? 'o',
  registrationLink: (props.details as Club)?.contact
    ? ClubUtils.getContactUrl((props.details as Club)?.contact)
    : getRegistrationLink(props.details as ClubEvent) ?? '',
  isEvent: !!(props.details as ClubEvent)?.type,
  date: (props.details as ClubEvent)?.date ?? '',
  time: (props.details as ClubEvent)?.time ?? '',
  location: (props.details as ClubEvent)?.location ?? '',
  locationLink: (props.details as ClubEvent)?.coordinates
    ? LocationService.getLocationUrl(props.details as ClubEvent)
    : '#',
});

const buttonLabel = ref(props?.buttonLabel ?? 'Ruck Up');

/**
 * Gets the registration, if it exists, otherwise empty string.
 * @param ev - the club event
 * @returns the URL.
 */
function getRegistrationLink(ev: ClubEvent): string {
  const foundClub = ClubsDB.find((item: Club) => item.id === ev.clubId);
  return (
    EventUtils.getMostRecentData<string>('url', foundClub, ev) ||
    ClubUtils.getContactUrl(foundClub?.contact as Contact) ||
    ''
  );
}

const resultArray = ContactUtils.convertContactToArray(card.value.contact);
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
          <v-col class="v-col-1"
            ><v-icon icon="mdi-text-account"></v-icon
          ></v-col>
          <v-col>{{ card.text }}</v-col>
        </v-row>
      </v-container>

      <v-container v-if="card.isEvent">
        <v-row>
          <v-col class="v-col-1"
            ><v-icon :icon="UtilsService.getClockTimeIcon(card.time)"></v-icon
          ></v-col>
          <v-col>{{ card.time }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-1"><v-icon icon="mdi-calendar"></v-icon></v-col>
          <v-col>{{ format(card.date, 'EEEE dd.MM.yyyy') }}</v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-1"><v-icon icon="mdi-map-marker"></v-icon></v-col>
          <v-col
            ><a
              :href="card.locationLink"
              class="text-secondary"
              target="_blank"
              style="font-weight: 600"
              >{{ card.location }}</a
            ></v-col
          >
        </v-row>
        <v-row>
          <v-col class="v-col-1"
            ><v-icon icon="mdi-bag-checked"></v-icon
          ></v-col>
          <v-col>{{ card.activity }}</v-col>
        </v-row>
      </v-container>
    </template>

    <template class="justify-space-between">
      <div v-if="!card.isEvent">
        <v-chip
          variant="outlined"
          v-for="(item, index) in resultArray"
          :key="index"
          style="margin-left: 5px"
        >
          <a v-if="item.name" :href="item.url" target="_blank">
            <v-icon
              :icon="ContactUtils.getIcon(item.name as keyof Contact)"
              color="white"
            ></v-icon>
          </a>
        </v-chip>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        class="bg-secondary"
        v-if="props.redirect"
        :to="'/club/' + card.id"
        >{{ buttonLabel }}</v-btn
      >
      <v-btn
        class="bg-secondary"
        v-if="!props.redirect"
        :href="card.registrationLink"
        target="_blank"
        >{{ buttonLabel }}</v-btn
      >
    </template>
  </v-card>
</template>

<style scoped>
.v-chip.v-chip--size-default {
  padding: 0 5px;
}
@media screen and (max-width: 400px) {
  .v-dialog > .v-overlay__content > .v-card {
    width: 100% !important;
  }
}
</style>
