<script setup lang="ts">
import Clubs from './components/Clubs.vue'
import EventsList from './components/EventsList.vue'
</script>

<template>
  <h1>My Ruck Club</h1>
  <p><em>My Ruck Club</em> is the first stop to get more info of your local ruck clubs.</p>
  <p>We are putting focus first in the DACH region.</p>
    <p>To get the development latest news we suggest:</p>
    <ul>
      <li>to follow <a href="https://muenchen.social/@rucking" target="_blank">https://muenchen.social/@rucking</a>,</li>
      <li>or join the <a href="https://feddit.de/c/rucking" target="_blank">Rucking Community</a> on Lemmy.</li>
      <li>or subscribe to their RSS feeds:
        <ul>
          <li><code>https://muenchen.social/users/rucking.atom</code></li>
          <li><code>https://feddit.de/users/rucking.atom</code></li>
        </ul>
      </li>
    </ul>
    <p>Or checkout one of these ruck clubs:</p>
    <Clubs/>
    <EventsList/>
</template>

<style scoped>
</style>
