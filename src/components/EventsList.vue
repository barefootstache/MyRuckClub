<script setup lang="ts">
import EventItem from '@/components/EventItem.vue';
import EventItemSkeleton from '@/components/EventItemSkeleton.vue';
import { ClubEvent } from '@/business-logic';
import {
  format,
  isThisYear,
  isThisWeek,
  isAfter,
  endOfYear,
  isBefore,
  nextSunday,
  getMonth,
  addYears,
  addDays,
} from 'date-fns';
import { computed } from 'vue';

type DateMapItem = {
  header: string;
  events: ClubEvent[];
};

type DateMap = {
  thisWeek: DateMapItem;
  nextWeek: DateMapItem;
  months: Array<DateMapItem>;
  nextYear: DateMapItem;
};

const props = withDefaults(
  defineProps<{
    events: ClubEvent[];
    filename?: string;
    lines?: false | 'one' | 'two' | 'three';
    showLocalTimes?: boolean;
    showUpcomingHeader?: boolean;
    useLogo?: boolean;
  }>(),
  {
    filename: '',
    lines: false,
    showLocalTimes: false,
    showUpcomingHeader: false,
    useLogo: false,
  }
);

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
      events: [],
    },
    nextWeek: {
      header: `Next week ${format(addDays(nextSunday(today), 1), 'cccc, yyyy-MM-dd')} till ${format(nextSunday(nextSunday(today)), 'cccc, yyyy-MM-dd')}`,
      events: [],
    },
    months: [
      {
        header: `January ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `February ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `March ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `April ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `May ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `June ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `July ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `August ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `September ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `October ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `November ${format(today, 'yyyy')}`,
        events: [],
      },
      {
        header: `December ${format(today, 'yyyy')}`,
        events: [],
      },
    ],
    nextYear: {
      header: `${format(addYears(today, 1), 'yyyy')}`,
      events: [],
    },
  };

  if (!events) return dateMap;

  events.map((ev) => {
    const date = ev.date;

    if (isThisWeek(date, { weekStartsOn: 1 })) {
      dateMap['thisWeek'].events.push(ev);
    } else if (
      isBefore(date, nextSunday(nextSunday(today))) &&
      !isThisWeek(date, { weekStartsOn: 1 })
    ) {
      dateMap['nextWeek'].events.push(ev);
    } else if (isThisYear(date)) {
      const monthNumber = getMonth(date);
      dateMap['months'][monthNumber].events.push(ev);
    } else if (isAfter(date, endOfYear(today))) {
      dateMap['nextYear'].events.push(ev);
    }
  });

  return dateMap;
}

const dateMap = computed(() => sortEvents(props.events));
const sortedEventsByDate = computed(() => {
  return [
    dateMap.value.thisWeek,
    dateMap.value.nextWeek,
    ...dateMap.value.months.filter((month) => month.events.length),
    dateMap.value.nextYear,
  ];
});
</script>

<template>
  <div class="local-times-header text-center" v-if="showLocalTimes">
    <p>All times are local times.</p>
    <p>All data should be double-checked on the club's site.</p>
  </div>

  <Suspense>
    <template #default>
      <div>
        <h2 class="upcoming-header text-center" v-if="showUpcomingHeader">
          <span v-if="events.length === 0">No </span>Upcoming Events
        </h2>
        <v-list :lines="lines">
          <template v-for="dateInterval in sortedEventsByDate">
            <template v-if="dateInterval.events.length">
              <h2 class="text-center">{{ dateInterval.header }}</h2>
              <template v-for="ev in dateInterval.events">
                <EventItem :event="ev" :use-logo="useLogo"></EventItem>
              </template>
            </template>
          </template>
        </v-list>
      </div>
    </template>
    <template #fallback>
      <div>
        <h2 class="upcoming-header text-center" v-if="showUpcomingHeader">
          Loading Upcoming Events
        </h2>
        <EventItemSkeleton></EventItemSkeleton>
        <EventItemSkeleton></EventItemSkeleton>
        <EventItemSkeleton></EventItemSkeleton>
      </div>
    </template>
  </Suspense>
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

.mrc-download-calendar-button {
  border: 1px rgba(var(--v-theme-surface), 0.1) solid;
  font-weight: 500;
  padding: 4px;
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

.v-list-item__content {
  text-align: left;
}

@media screen and (max-width: 800px) {
  h2 {
    padding: 0 32px;
  }
}
</style>