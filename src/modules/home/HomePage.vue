<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlScale,
  LIcon,
} from '@vue-leaflet/vue-leaflet';
import MarkerDialog from '@/components/MarkerDialog.vue';
import { Club, ClubEvent, PLACEHOLDER_CLUB } from '@/business-logic';
import { OsmUtils } from '@/business-logic/index.utils';
import { useClubsStore } from '@/stores/clubs.store';
import { differenceInQuarters, parse } from 'date-fns/esm';
import { useClubEventsStore } from '@/stores';

const zoom = document.documentElement.clientWidth < 800 ? 3 : 4;

const visible = ref(false);
const isClubActive = ref(true);
const markerDialog = ref();
const isClubActiveText = ref("Active Clubs");
const store = useClubsStore();

const data = ref([PLACEHOLDER_CLUB])

onMounted(async () => {
  await store.registerClubsList();
  updateIsClubActive();
});

/**
 * Shows the marker dialog.
 * @param value - the visibility of the dialog
 * @param body - the details of the dialog body
 */
function showDialog(value: boolean, body: Club | ClubEvent): void {
  visible.value = value;
  markerDialog.value = body;
}

/**
 * Updates the club respective if they have an active social media post or a future event.
 */
function updateIsClubActive(): void {
  if (isClubActive.value) {
    isClubActiveText.value = "Active Clubs are either active on social media or have upcoming events."
    data.value = store.list.filter((club) => {
      if (club.socialMediaContent && club.socialMediaContent.updatedAt) {
        const datesBetween = differenceInQuarters(parse(club.socialMediaContent.updatedAt, 'yyyy-MM-dd', new Date()), parse(club.socialMediaContent.lastPost, 'yyyy-MM-dd', new Date()))
        const maxQuartersDistance = 2
        if (datesBetween <= maxQuartersDistance) {
          // the club had a social media entry in the past 2 quarters
          return club
        }
        const events = useClubEventsStore().list.filter((ev) => ev.clubId === club.id)
        if (events.length) {
          // the club has events, but no social media entries
          return club
        }
      }
    })
  } else {
    isClubActiveText.value = "All Clubs are currently or in the past active."
    data.value = store.list;
  }
}
</script>

<template>
  <div class="mobile-container">
    <div class="text-center v-card v-card--variant-elevated">
      <h1>My Ruck Club</h1>
      <p>
        <em>My Ruck Club</em> is the first stop to get more info of your local
        ruck clubs.
      </p>
    </div>

    <div class="map-view v-card--variant-elevated">
      <l-map ref="map" v-model:zoom="zoom" :center="[52.250, 9.547]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"></l-tile-layer>
        <l-control-scale position="bottomleft" :imperial="true" :metric="true"></l-control-scale>

        <div v-for="club in data">
          <l-marker @click="showDialog(true, club)" v-if="!club?.hide" :lat-lng="club.coordinates">
            <l-icon :icon-url="OsmUtils.getPin('default', 2).options.iconUrl"
              :icon-size="OsmUtils.getPin('default', 2).options.iconSize"
              :icon-anchor="OsmUtils.getPin('default', 2).options.iconAnchor"></l-icon>
          </l-marker>
        </div>

        <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
          <MarkerDialog :details="markerDialog" :redirect="true" button-label="Ruck More"></MarkerDialog>
        </v-dialog>
      </l-map>
    </div>
    <div class="v-card v-card--variant-elevated">
      <v-switch class="ml-2" v-model="isClubActive" :label="isClubActiveText" color="info"
        @update:modelValue="updateIsClubActive"></v-switch>
    </div>
  </div>
</template>

<style scoped>
.map-view {
  height: 600px;
  width: 800px;
  margin: auto;
  margin-bottom: 8px;
}

@media screen and (max-width: 800px) {
  .map-view {
    height: 500px;
    width: 100%;
  }

  .mobile-hide {
    display: none;
  }

  .mobile-container {
    height: calc(100% - 32px);
    width: 100%;
  }

  :deep() .marker-dialog {
    top: 0 !important;
    left: 0 !important;
    margin: 0 calc((100% - 400px) / 2) !important;
  }

  :deep() .marker-dialog .v-row {
    margin-top: 0;
  }

  :deep() .marker-dialog .v-card-text {
    padding-top: 0 !important;
  }

  :deep() .marker-dialog .v-container {
    padding: 0;
  }
}

:deep() .marker-dialog {
  position: absolute;
  top: 20px;
  left: calc(50% - 25px);
}

@media screen and (max-width: 400px) {
  :deep() .marker-dialog {
    top: 0 !important;
    left: 0 !important;
    margin: 0 2px !important;
    width: calc(100% - 4px) !important;
    max-width: calc(100% - 4px) !important;
  }

  .map-view {
    width: 100%;
  }
}
</style>