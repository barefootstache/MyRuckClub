<script setup lang="ts">
  import EventItem from '@/components/EventItem.vue'
  import { ClubEvent } from "@/business-logic";
  import { format, isThisYear, isThisWeek, isAfter, endOfYear, isBefore, nextSunday, isSunday, getMonth, addYears, addDays } from 'date-fns';

  type DateMapItem = {
    header: string;
    events: ClubEvent[];
  }

  type DateMap = {
    thisWeek: DateMapItem;
    nextWeek: DateMapItem;
    months: Array<DateMapItem>;
    nextYear: DateMapItem;
  };

  const props = withDefaults(defineProps<{
    events: ClubEvent[],
    lines?: false | 'one' | 'two' | 'three',
    showLocalTimes?: boolean,
    showUpcomingHeader?: boolean,
    useLogo?: boolean
  }>(),{
    lines: false,
    showLocalTimes: false,
    showUpcomingHeader: false,
    useLogo: false
  })

  /**
   * Sorts the events into a DateMap for easier future processing.
   * @param events - the club events
   * @returns the processed data
   */
  function sortEvents(events: ClubEvent[]): DateMap {
    const today = new Date();

    const dateMap: DateMap = {
      thisWeek: {
        header: `This week including ${format(nextSunday(today), 'cccc, yyyy-MM-dd')}`,
        events: []
      },
      nextWeek: {
        header: `Next week ${format(addDays(nextSunday(today), 1), 'cccc, yyyy-MM-dd')} till ${format(nextSunday(nextSunday(today)), 'cccc, yyyy-MM-dd')}`,
        events: []
      },
      months: [
        {
          header: `January ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `February ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `March ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `April ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `May ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `June ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `July ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `August ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `September ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `October ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `November ${format(today, 'yyyy')}`,
          events: []
        },
        {
          header: `December ${format(today, 'yyyy')}`,
          events: []
        },
      ],
      nextYear: {
        header: `${format(addYears(today, 1), 'yyyy')}`,
        events: []
      }
    };

    events.map(ev => {
      const date = ev.date;

      if (isThisWeek(date, { weekStartsOn: 1 })) {
        dateMap['thisWeek'].events.push(ev);
      } else if (isBefore(date, nextSunday(nextSunday(today))) && !isSunday(today) || isSunday(today) && nextSunday(today)) {
        dateMap['nextWeek'].events.push(ev);
      } else if (isThisYear(date)) {
        const monthNumber = getMonth(date)
        dateMap['months'][monthNumber].events.push(ev);
      } else if (isAfter(date, endOfYear(today))) {
        dateMap['nextYear'].events.push(ev);
      }
    });

    return dateMap;
  }

  const dateMap = sortEvents(props.events)
  const sortedEventsByDate = [dateMap.thisWeek, dateMap.nextWeek,...dateMap.months.filter(month => month.events.length), dateMap.nextYear];
</script>

<template>
  <div class="local-times-header" v-if="showLocalTimes">
    <span>All times are local times.</span>
  </div>

  <h2 class="upcoming-header" v-if="showUpcomingHeader"><span v-if="events.length === 0">No </span>Upcoming Events</h2>

  <v-list :lines="lines">
    <template v-for="dateInterval in sortedEventsByDate">
      <template v-if="dateInterval.events.length">
        <h2>{{dateInterval.header}}</h2>
        <template v-for="ev in dateInterval.events">
          <EventItem :event="ev" :useLogo="useLogo"></EventItem>
        </template>
      </template>
    </template>
  </v-list>
</template>

<style scoped>
  .v-list {
    background: rgba(var(--v-theme-background));
    color: rgba(var(--v-theme-surface));
    overflow: unset;
  }

  h2 {
    margin: 32px 0;
    border: 1px rgba(var(--v-theme-surface), 0.1) solid;
    font-weight: 500;
  }

  .upcoming-header {
    margin-bottom: 0;
    font-size: 2.25rem;
    font-weight: 500;
    border: none;
  }

  .local-times-header {
    margin: 5px 0;
    span {
      font-size: 1.3rem;
    }
  }
</style>
