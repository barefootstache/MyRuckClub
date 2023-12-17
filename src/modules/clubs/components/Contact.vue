<script setup lang="ts">
  import { Club } from '@/business-logic/clubs.model'
  import { Contact } from '@/business-logic/contact.model'
  import { UtilsService } from '@/services/utils.service';
  import { getIcon } from '@/business-logic/contact.utils'

  const props = defineProps<{
    club: Club
  }>();

  const preferred = {
    url: props.club.contact[props.club.contact.preferred],
    name: UtilsService.capitalize(props.club.contact.preferred),
    icon: getIcon(props.club.contact.preferred)
  };

  const contacts = Object.keys(props.club.contact)
    .filter(key => key !== 'preferred' && key !== props.club.contact.preferred)
    .map(key => [key, props.club.contact[key as keyof Contact]]);
</script>

<template>
  <div class="container">
    <div class="primary-contact">
      <p>
        For more info contact us on our 
        <v-chip variant="elevated" color="primary">
          <a :href="preferred.url" target="_blank">
            <v-icon start :icon="preferred.icon" color="white"></v-icon>
            {{ preferred.name }}
          </a>
        </v-chip>
      </p>
    </div>

    <div class="more-contact" v-if="contacts.length > 0">
      Or you can also find us on <v-chip variant="outlined" color="black" v-for="[social, url] in contacts">
        <a v-if="social" :href="url" target="_blank" style="color: black"><v-icon start :icon="getIcon(social as keyof Contact)" color="red"></v-icon>{{ UtilsService.capitalize(social) }}</a>
      </v-chip>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 5px;
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
</style>
