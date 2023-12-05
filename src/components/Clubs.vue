<script setup lang="ts">
  import {Clubs} from '../assets/clubs.db.ts'
  import { alphabetical } from 'radash';
  const alphabeticalSort = alphabetical(Clubs, c => c.name);
</script>

<template>
  <div>
    <h3>Germany</h3>
    <ul>
      <li v-for="club in alphabeticalSort.filter(c => c.country === 'Germany')">
        <router-link v-if="!club.hide" :to="{ name: 'Club', params: {id: club.id}}">{{ club.name }}</router-link>
      </li>
    </ul>
    <h3>Ireland</h3>
    <ul>
      <li v-for="club in alphabeticalSort.filter(c => c.country === 'Ireland')">
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
</style>
