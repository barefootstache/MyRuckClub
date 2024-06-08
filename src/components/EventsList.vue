<script setup lang="ts">
  import EventItem from '@/components/EventItem.vue'
  import { ClubEvent } from "@/business-logic/events.model";

  withDefaults(defineProps<{
    events: ClubEvent[],
    lines?: false | 'one' | 'two' | 'three',
    showLocalTimes?: boolean,
    useLogo?: boolean
  }>(),{
    lines: false,
    showLocalTimes: false,
    useLogo: false
  })
</script>

<template>
  <div v-if="showLocalTimes" style="margin: 5px 0;">
    <span style="font-size: 1.3rem;">All times are local times.</span>
  </div>

  <!-- <h2><span v-if="upcomingClubEvents.length === 0">No </span>Upcoming Events</h2> -->

  <v-list :lines="lines">
    <template v-for="ev in events">
      <EventItem :event="ev" :useLogo="useLogo"></EventItem>
    </template>
  </v-list>
</template>

<style scoped>
  .v-list {
    background: rgba(var(--v-theme-background));
    color: rgba(var(--v-theme-surface));
    overflow: unset;
  }
</style>
