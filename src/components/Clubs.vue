<script setup lang="ts">
  import {Clubs} from '../assets/clubs.db.ts'
</script>

<template>
  <div>
    <ul>
      <li v-for="club in Clubs">
        <a :href="club.url" target="_blank">{{ club.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
