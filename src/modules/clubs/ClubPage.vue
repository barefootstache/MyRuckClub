<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router';
  import { format, isAfter, subDays } from 'date-fns';
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer, LMarker, LControlScale } from "@vue-leaflet/vue-leaflet";
  import { ClubsDB } from '@/db/index.db';
  import { Club } from '@/business-logic/clubs.model';
  import { EventsDB } from '@/db/index.db';
  import { getPin } from '@/business-logic/osm.utils';
  import { LocationService } from '@/services/location.service';
  import { ClubEvent } from '@/business-logic/events.model';
  import { getAssociationByType } from '@/business-logic/associations.utils'
  import { getContactUrl } from '@/business-logic/clubs.utils';
  import Contact from './components/Contact.vue';
  import MarkerDialog from '@/components/MarkerDialog.vue';

  /**
   * Reference for `this.$route`.
   */
  const route = useRoute();

  /**
   * Finds the referenced club by clubId.
   */
  const club = ClubsDB.find((item) => item.id === route.params.id) as Club;

  /**
   * Filters events that are happening today and later.
   */
  const upcomingClubEvents = EventsDB.filter((item) => item.clubId === club.id).filter((item) => isAfter(item.date, subDays(new Date(), 1)));
  const uniqueEventsLocations = LocationService.getUniqueEventsLocations(upcomingClubEvents);
  const allCoordinates = uniqueEventsLocations.map((ev:ClubEvent) => LocationService.getCoordinates(ev)).concat([club.coordinates]);
  const boundingBox = LocationService.getBoundingBox(allCoordinates);

  const associations = (club?.associations || []).map(ass => getAssociationByType(ass));

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
  <div>
    <h1>{{club.name}}</h1>
    <p v-if="club?.default?.location">We typically meet at <a :href="LocationService.getLocationClubUrl(club)" target="_blank">{{club?.default?.location}}</a>.</p>
    
    <div class="map-view">
      <l-map ref="map" v-model:zoom="boundingBox.zoom" :center="[0,0]" :bounds="boundingBox.box" :max-bounds="boundingBox.box">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        ></l-tile-layer>
        <l-control-scale position="bottomleft" :imperial="true" :metric="true"></l-control-scale>

        <l-marker @click="showDialog(true, club)" v-if="!club?.hide" :lat-lng="club.coordinates" :icon="getPin('default')"> </l-marker>

        <l-marker @click="showDialog(true, ev)" v-for="ev in uniqueEventsLocations" :lat-lng="ev.coordinates" :icon="getPin(ev.type)"> </l-marker>

        <v-dialog v-model="visible" :scrim="false" content-class="marker-dialog">
          <MarkerDialog :details="markerDialog"></MarkerDialog>
        </v-dialog>
      </l-map>
    </div>

    <div class="hline"></div>

    <Contact :club="club"></Contact>

    <div class="hline"></div>

    <div v-if="associations.length > 0">
      <p>We associate with</p>
      <v-chip variant="outlined" :color="ass.color" v-for="ass in associations">
        <span>{{ ass.name }}</span>
      </v-chip>
    </div>
    
    <div class="hline"></div>

    <h2><span v-if="upcomingClubEvents.length === 0">No </span>Upcoming Events</h2>
    
    <ul class="events-view">
      <li v-for="ev in upcomingClubEvents">
        <span style="font-weight: bold">{{ev.name}}</span><br>
        <span>{{format(ev.date, 'EEEE dd.MM.yyyy')}}</span><br>
        <span>{{ev.time}} - <a :href="LocationService.getLocationUrl(ev)" target="_blank">{{ev.location}}</a></span><br>
        <span v-if="ev.clubId">Registration at <a :href="getContactUrl(club.contact)" target="_blank">{{club.name}}</a></span>
        <span></span>
      </li>
    </ul>
    
  </div>
</template>

<style scoped>
li {
  outline: 1px rgba(var(--v-theme-surface), 0.87) solid;
  margin-bottom: 4px;
  padding: 0 4px;
}
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
  :deep() .marker-dialog {
    top: 0 !important;
    left: 0 !important;
    margin: 0 calc((100% - 400px)/2) !important;
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
.events-view {
  margin: auto;
  padding: 0;
  list-style: none;
}
.v-chip {
  margin-left: 5px;
}
.hline {
  margin: 5px 0;
  border-bottom: 1px rgba(var(--v-theme-surface), 0.87) solid;
}
.v-chip.text-black {
  background-color: rgba(255, 255, 255, 0.8);
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
