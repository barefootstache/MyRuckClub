<script setup lang="ts">
import { ref } from 'vue';
import { ClubsDB } from '@/db/index.db';

const search = ref('');

const groupBy = [
  {
    key: 'country',
    order: 'asc',
  },
] as const;

const sortBy = [{ key: 'name', order: 'asc' }] as const;

const headers = [
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Country', key: 'country', align: 'end', sortable: false },
] as const;
</script>

<template>
  <v-card title="Meet the Ruck Clubs" flat>
    <template #text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :sort-by="sortBy"
      :group-by="groupBy"
      :items="ClubsDB"
      :headers="headers"
      items-per-page="25"
      :search="search"
    >
      <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
        <tr>
          <td
            :colspan="columns.length"
            @click="toggleGroup(item)"
            class="clickable"
          >
            <VBtn
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
              size="small"
              variant="text"
            ></VBtn>
            {{ item.value }} ({{ item.items.length }})
          </td>
        </tr>
      </template>

      <template #item="{ item }">
        <tr>
          <td></td>
          <td>
            <router-link :to="{ name: 'Club', params: { id: item.id } }">{{
              item.name
            }}</router-link>
          </td>
          <td align="right">{{ item.country }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<style>
.v-data-table-column--align-start,
tr {
  text-align: start;
}

.v-card,
.v-table,
thead {
  color: var(--v-theme-surface);
  background-color: var(--v-theme-background);
}

.v-data-table__th--sortable:hover {
  color: rgb(var(--v-theme-accent-hover)) !important;
}

.clickable:hover {
  cursor: pointer;
  color: rgb(var(--v-theme-accent-hover)) !important;
}
</style>
