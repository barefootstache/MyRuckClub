<script setup lang="ts">
  import Clubs from '@/components/Clubs.vue'
  import { ClubsDB } from '@/db/index.db'
</script>

<template>
  <h2>Meet the Ruck Clubs</h2>
  <Clubs :items="ClubsDB" search="ruck"></Clubs>
</template>
