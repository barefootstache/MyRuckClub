<script setup lang="ts">
  import { Club } from '@/business-logic/clubs.model';
  import { unique } from 'radash';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<{
    items: Club[],
    search: string
  }>(),{
    search: ''
  });

  const filteredItems = computed<Club[]>(
    () => {
      if(!props.search) return props.items;
      const searchLower = props.search.toLowerCase();
      return props.items.filter(item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.country.toLowerCase().includes(searchLower)
      );
  });

  const sortByCountryThenName = computed<Club[]>(
    () => {
      return filteredItems.value.slice().sort((a,b) => {
        const countryComparison = a.country.localeCompare(b.country);
        if (countryComparison !== 0) {
          return countryComparison;
        }
        return a.name.localeCompare(b.name);
      })
    }
  )
</script>

<template :items="sortByCountryThenName">
  <div v-for="country in unique(sortByCountryThenName.map(c => c.country))" id="country">
    <h3>{{country}}</h3>
    <ul>
      <li v-for="club in sortByCountryThenName.filter(c => c.country === country)">
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

  h3 {
    border-bottom: 1px rgba(var(--v-theme-surface), 0.87) solid;
    border-top: 1px rgba(var(--v-theme-surface), 0.1) solid;
    margin-top: 16px;
  }
</style>
