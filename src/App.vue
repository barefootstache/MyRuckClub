<script setup lang="ts">
import Clubs from './components/Clubs.vue'
import EventsList from './components/EventsList.vue'
</script>

<template>
  <h1>My Ruck Club</h1>
    <p><em>My Ruck Club</em> is the first stop to get more info of your local ruck clubs. We are putting focus first in the DACH region.</p>
    <p>This website is currently under construction!</p>
    <p>We suggest to follow <a href="https://muenchen.social/@rucking" target="_blank">https://muenchen.social/@rucking</a> to get the latest development news. Or join the <a href="https://feddit.de/c/rucking" target="_blank">Rucking Community</a> on Lemmy.</p>
    <p>Or checkout one of these ruck clubs:</p>
    <Clubs/>
    <EventsList/>
</template>

<style scoped>
</style>
