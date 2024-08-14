<script setup lang="ts">
import { Club, Contact } from '@/business-logic';
import { UtilsService } from '@/services';
import {
  getIcon,
  getLink,
  convertContactToArray,
} from '@/business-logic/contacts.utils';
import { computed } from 'vue';

const props = defineProps<{
  club: Club;
}>();

const contact = computed(() => {
  const contactArr = convertContactToArray(props.club.contact);
  return {
    preferred: contactArr[0],
    items: contactArr.length > 1 ? contactArr.slice(1) : []
  }
})

</script>

<template>
  <div class="container">
    <div class="primary-contact">
      <span>For more info contact us on our</span>
      <v-chip variant="elevated" color="primary">
        <a :href="getLink(contact.preferred)" target="_blank">
          <v-icon
            start
            :icon="getIcon(contact.preferred.name as keyof Contact)"
            color="white"
          ></v-icon>
          <span>{{ UtilsService.capitalize(contact.preferred.name) }}</span>
        </a>
      </v-chip>
    </div>

    <div class="more-contact" v-if="contact.items.length > 0">
      <span>Or you can also find us on</span>
      <v-chip variant="outlined" color="black" v-for="item in contact.items">
        <a
          v-if="item.name"
          :href="getLink(item)"
          target="_blank"
          style="color: black"
        >
          <v-icon
            start
            :icon="getIcon(item.name as keyof Contact)"
            color="red"
          ></v-icon>
          <span>{{ UtilsService.capitalize(item.name) }}</span>
        </a>
      </v-chip>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 5px;
}
.v-chip {
  margin-left: 5px;
}
.v-chip.text-black {
  background-color: rgba(255, 255, 255, 0.8);
}
.more-contact {
  margin-top: 5px;
}
.more-contact .v-chip a {
  color: black;
}
.primary-contact .v-chip a {
  color: white;
}
@media screen and (max-width: 800px) {
  .v-chip a span {
    display: none;
  }
  .v-chip .v-icon--start {
    margin-inline-end: -6px;
  }
}
</style>