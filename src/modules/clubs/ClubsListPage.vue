<script setup lang="ts">
import Clubs from '@/components/Clubs.vue'

let search = '';
</script>

<template>
  <h2>Meet the Ruck Clubs</h2>
  {{search}}
  <v-row>
    <v-col cols="9">
      <v-text-field label="Search" placeholder="Munich" variant="outlined" v-model="search"></v-text-field>
    </v-col>
    <v-col cols="3">
      <v-btn append-icon="mdi-magnify" color="primary" size="x-large">Search</v-btn>
    </v-col>
  </v-row>
  <Clubs :search="search"></Clubs>
</template>
