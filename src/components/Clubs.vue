<script setup lang="ts">
  import { ClubsDB } from '../db/index.db'
  import { alphabetical, unique } from 'radash';
  const alphabeticalSort = alphabetical(ClubsDB, c => c.name);
  const countrySort = alphabetical(unique(ClubsDB.map(c => c.country)), c => c);
</script>

<template>
  <div v-for="country in countrySort">
    <h3>{{country}}</h3>
    <ul>
      <li v-for="club in alphabeticalSort.filter(c => c.country === country)">
        <router-link v-if="!club.hide" :to="{ name: 'Club', params: {id: club.id}}">{{ club.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
}
h3 {
  border-bottom: 1px white solid;
}
</style>
