<script setup lang="ts">
  import { ref } from 'vue'
  import {ClubsDB} from '@/db/index.db'
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
  import { getPin } from '@/business-logic/osm.utils';
  import MarkerDialog from '@/components/MarkerDialog.vue';
  import { Club } from '@/business-logic/clubs.model';
  import { ClubEvent } from '@/business-logic/events.model';

  const zoom = document.documentElement.clientWidth < 800 ? 5 : 6; 

  const visible = ref(false);
  const markerDialog = ref();

  /**
   * Shows the marker dialog.
   * @param value - the visibility of the dialog
   * @param body - the details of the dialog body
   */
  function showDialog(value: boolean, body: Club|ClubEvent):void {
    visible.value = value;
    markerDialog.value = body;
  }
</script>

<template>
  <div class="mobile-container">
    <div class="mobile-hide">
      <h1>My Ruck Club</h1>
      <p><em>My Ruck Club</em> is the first stop to get more info of your local ruck clubs.</p>
    </div>

    <div class="map-view">
      <l-map ref="map" v-model:zoom="zoom" :center="[50.785, 9.547]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>

        <div v-for="club in ClubsDB">
          <l-marker @click="showDialog(true, club)" v-if="!club?.hide" :lat-lng="club.coordinates" :icon="getPin('default', 2)"> </l-marker>
        </div>

        <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
          <MarkerDialog :details="markerDialog" :redirect="true" button-label="Ruck More"></MarkerDialog>
        </v-dialog>
      </l-map>
    </div>
  </div>
</template>

<style scoped>
.map-view {
  height: 600px;
  width: 800px;
  margin: auto;
}
@media screen and (max-width: 800px) {
  .map-view {
    height: 700px;
    width: 400px;
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
    margin: 0 calc((100% - 400px)/2) !important;
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
}
</style>

