<script setup lang="ts">
  import {Clubs} from '../assets/clubs.db.ts'
  import { alphabetical } from 'radash';
  const alphabeticalSort = alphabetical(Clubs, c => c.name);
</script>

<template>
  <div>
    <ul>
      <li v-for="club in alphabeticalSort">
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
