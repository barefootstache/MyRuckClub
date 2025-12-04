<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { format } from 'date-fns';
import { Club, ClubEvent, Contact, PLACEHOLDER_CLUB } from '@/business-logic';
import { LocationService, UtilsService } from '@/services';
import {
  EventUtils,
  ContactUtils,
  ClubUtils,
} from '@/business-logic/index.utils';
import { useClubsStore } from '@/stores';

const props = withDefaults(
  defineProps<{
    details: Club | ClubEvent;
    redirect?: boolean;
    buttonLabel?: string;
  }>(),
  {
    redirect: false,
    buttonLabel: 'Ruck Up',
  }
);

const club = ref(PLACEHOLDER_CLUB);
const store = useClubsStore();

onMounted(async () => {
  await store.registerClubsList();
  club.value = store.getClubById((props.details as ClubEvent)?.clubId);
});

const card = computed(() => {
  const body = {
    activity: '',
    avatar: '',
    contact: '',
    contactPreferred: 'o',
    date: '',
    id: '#',
    isEvent: false,
    location: '',
    locationLink: '#',
    registrationLink: '',
    subtitle: '',
    text: '',
    time: '',
    title: props.details.name ?? '',
  } as any;

  if (ClubUtils.isClub(props.details)) {
    const tClub = props.details as Club;
    body.id = tClub.id;
    body.subtitle = tClub.country;
    body.contact = tClub.contact;
    body.contactPreferred = tClub.contact.preferred;
    body.registrationLink = ClubUtils.getContactUrl(body.contact);
    body.avatar = tClub.hasLogo ? `clubs/${tClub.id}-logo.jpg` : `clubs/myruckclub-logo.png`
  } else if (EventUtils.isClubEvent(props.details)) {
    const clubEvent = props.details as ClubEvent;
    body.id = clubEvent.clubId;
    body.subtitle = club.value.name;
    body.activity = clubEvent.type.toString().toUpperCase();
    body.registrationLink = getRegistrationLink(clubEvent);
    body.isEvent = true;
    body.date = clubEvent.date;
    body.time = clubEvent.time;
    body.location = clubEvent.location;
    body.locationLink = LocationService.getLocationUrl(clubEvent);
    body.avatar = `clubs/${clubEvent.clubId}-logo.jpg`
  }

  return body;
});

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

const resultArray = ContactUtils.convertContactToArray(card.value.contact);
</script>

<template>
  <v-card width="400">
    <template v-slot:prepend>
      <v-avatar size="32">
        <v-img alt="logo" :src="card.avatar"></v-img>
      </v-avatar>
    </template>

    <template #title>
      <p class="word-break">{{ card.title }}</p>
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
          <v-col><a :href="card.locationLink" class="text-secondary" target="_blank" style="font-weight: 600">{{
            card.location }} <v-icon icon="mdi-open-in-new" size="x-small"></v-icon></a></v-col>
        </v-row>
        <v-row>
          <v-col class="v-col-1"><v-icon icon="mdi-bag-checked"></v-icon></v-col>
          <v-col>{{ card.activity }}</v-col>
        </v-row>
      </v-container>
    </template>

    <template #actions class="justify-space-between">
      <div v-if="!card.isEvent">
        <v-chip variant="outlined" color="primary" v-for="(item, index) in resultArray" :key="index"
          style="margin-left: 5px">
          <a v-if="item.name" :href="item.url" target="_blank">
            <v-icon :icon="ContactUtils.getIcon(item.name as keyof Contact)" color="primary"></v-icon>
          </a>
        </v-chip>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="bg-primary" v-if="props.redirect" :to="'/club/' + card.id">{{ props.buttonLabel }}</v-btn>
      <v-btn class="bg-primary" v-if="!props.redirect" :href="card.registrationLink" target="_blank">{{
        props.buttonLabel }} <v-icon icon="mdi-open-in-new" size="x-small"></v-icon></v-btn>
    </template>
  </v-card>
</template>

<style scoped>
.v-chip.v-chip--size-default {
  padding: 0 5px;
}

.word-break {
  white-space: normal;
  word-break: break-word;
}

@media screen and (max-width: 400px) {
  .v-dialog>.v-overlay__content>.v-card {
    width: 100% !important;
  }
}
</style>