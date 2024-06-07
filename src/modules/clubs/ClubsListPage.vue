<script setup lang="ts">
  import { ref } from 'vue'
  import Clubs from '@/components/Clubs.vue'
  import { ClubsDB } from '@/db/index.db'
  import { unique } from 'radash';

  const search = ref('');
  const items = ClubsDB.map(c => c.name).concat(unique(ClubsDB.map(c=>c.country)));

  function onAutocompleteChange(data:string):void {
    console.log({data});
    search.value = data ? data : search.value;
  }
</script>

<template>
  <h2>Meet the Ruck Clubs</h2>
  <v-row>
    <!-- <v-col cols="9"> -->
    <!--   <v-text-field label="Search" placeholder="Munich" variant="outlined" v-model="search"></v-text-field> -->
    <!-- </v-col> -->
    <!-- <v-col cols="3"> -->
    <!--   <v-btn append-icon="mdi-magnify" color="primary" size="x-large">Search</v-btn> -->
    <!-- </v-col> -->
    <v-col cols="12">
      <v-autocomplete :items="items" 
        label="Search" :clearable="true"
        @update:search="onAutocompleteChange($event)"
        ></v-autocomplete>
    </v-col>
  </v-row>
  <Clubs :search="search"></Clubs>
</template>
