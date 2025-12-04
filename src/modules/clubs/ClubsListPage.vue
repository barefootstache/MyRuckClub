<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { PLACEHOLDER_CLUB } from '@/business-logic';
import { useClubsStore } from '@/stores/clubs.store';
import { ClubUtils } from '@/business-logic/index.utils';
import { useClubEventsStore } from '@/stores';

const search = ref('');
const data = ref({
  clubs: [PLACEHOLDER_CLUB]
});
const store = useClubsStore();

onMounted(async () => {
  await store.registerClubsList();
  data.value.clubs = store.list;
});

const groupBy = [
  {
    key: 'country',
    order: 'asc',
  },
] as const;

const sortBy = [{ key: 'name', order: 'asc' }] as const;

const headers = [
  { title: 'Name', key: 'name', align: 'start' },
  { title: 'Is Active?', key: 'active', align: 'start', sortable: false },
  { title: 'Country', key: 'country', align: 'end', sortable: false },
] as const;
</script>

<template>
  <v-card title="Meet the Ruck Clubs">
    <template #text>
      <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
        single-line></v-text-field>
    </template>
  </v-card>

  <v-card>
    <v-data-table :sort-by="sortBy" :group-by="groupBy" :items="data.clubs" :headers="headers" items-per-page="25"
      :search="search">
      <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
        <tr>
          <td :colspan="columns.length" @click="toggleGroup(item)" class="clickable">
            <VBtn :icon="isGroupOpen(item) ? '$expand' : '$next'" size="small" variant="text"></VBtn>
            {{ item.value }} ({{ item.items.length }})
          </td>
        </tr>
      </template>

      <template #item="{ item }">
        <tr class="child-item">
          <td>
            <v-avatar :image="ClubUtils.getLogo(item)" size="32"> </v-avatar>
          </td>
          <td>
            <router-link class="a-primary" :to="{ name: 'Club', params: { id: item.id } }">{{
              item.name
              }}</router-link>
          </td>
          <td>(<span v-if="!ClubUtils.isActiveClub(item, useClubEventsStore().list)">Not </span>Active)</td>
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

.v-table thead,
.v-data-table-footer {
  color: rgb(var(--v-color-white));
  background-color: rgb(var(--v-theme-primary));
}

.v-data-table-footer .v-input__control {
  color: rgb(var(--v-theme-font));
}

.v-data-table__th--sortable:hover {
  color: rgb(var(--v-theme-primary-hover)) !important;
}

.clickable {
  background-color: rgb(var(--v-theme-primary-light));
}

.clickable:hover {
  cursor: pointer;
  color: rgb(var(--v-theme-primary-hover)) !important;
}

.v-input__control,
.child-item {
  background-color: rgb(var(--v-theme-surface));
}
</style>