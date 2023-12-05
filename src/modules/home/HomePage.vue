<script setup lang="ts">
import Clubs from '../../components/Clubs.vue'
import EventsList from '../../components/EventsList.vue'
import {Clubs as ClubsList} from '../../assets/clubs.db.ts'

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const zoom = document.documentElement.clientWidth < 800 ? 5 : 6; 

const hqIcon = L.icon({
  iconUrl: '/hq_pin.png',
  iconSize: [20, 30],
  iconAnchor: [10, 30]
})
</script>

<template>
  <h1>My Ruck Club</h1>
  <p><em>My Ruck Club</em> is the first stop to get more info of your local ruck clubs.</p>

  <div class="map-view">
    <l-map ref="map" v-model:zoom="zoom" :center="[50.785, 9.547]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      ></l-tile-layer>

      <div v-for="club in ClubsList">
        <l-marker v-if="!club?.hide" :lat-lng="club.coordinates" :icon="hqIcon"> </l-marker>
      </div>
    </l-map>
  </div>

  <p>To get the development latest news we suggest:</p>
  <ul>
    <li>to follow <a href="https://muenchen.social/@rucking" target="_blank">https://muenchen.social/@rucking</a>,</li>
    <li>or join the <a href="https://feddit.de/c/rucking" target="_blank">Rucking Community</a> on Lemmy.</li>
    <li>or subscribe to their RSS feeds:
      <ul>
        <li><code>https://muenchen.social/users/rucking.atom</code></li>
        <li><code>https://feddit.de/users/rucking.atom</code></li>
      </ul>
    </li>
  </ul>
  <p>Or checkout one of these ruck clubs:</p>
  <Clubs/>
  <h2>Upcoming Events</h2>
  <EventsList/>
</template>

<style scoped>
.map-view {
  height: 600px;
  width: 800px;
  margin: auto;
}
@media screen and (max-width: 800px) {
  .map-view {
    height: 380px;
    width: calc(100% - 20px);
  }
}
</style>

