<script setup lang="ts">
  import {Clubs} from '../assets/clubs.db.ts'
</script>

<template>
  <div>
    <ul>
      <li v-for="club in Clubs">
        <router-link v-if="!club.hide" :to="{ name: 'Club', params: {id: club.id}}">{{ club.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
