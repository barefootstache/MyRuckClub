<script setup lang="ts">
  import { ClubEvent } from '@/business-logic/';
  import { isAfter } from 'date-fns';
  import { EventAttributes, createEvents } from 'ics';

  const props = withDefaults(defineProps<{events: ClubEvent[], filename?: string}>(),
    {
      filename: 'MyRuckClub_events_calendar.ics'
    }
  );

  /**
   * Downloads the ICS calendar.
   */
  async function handleDownload(): Promise<void> {
    const file = await new Promise((resolve, reject) => {
      const events = (props.events
        .filter(ev => isAfter(ev.date, new Date()))
        .map(ev => ev.ics)
        .filter(ev => ev !== undefined) || []) as EventAttributes[];
      createEvents(events, (error, value) => {
        if(error) {
          reject(error)
        }

        resolve(new File([value], props.filename, {type: 'text/calendar'}));
      })
    }) as Blob;
    const url = URL.createObjectURL(file);

    // trying to assign the file URL to a window could cause cross-site
    // issues so this is a workaround using HTML5
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = props.filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }
</script>

<template>
  <div class="mrc-download-calendar-button">
    <span>Download the .ics calendar </span>
    <v-btn prepend-icon="mdi-calendar-multiselect" color="primary" @click="handleDownload()">
      ics
    </v-btn>
  </div>
</template>

<style scoped>
</style>
