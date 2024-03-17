<script setup lang="ts">
import { useTheme } from 'vuetify'
import ReloadPrompt from './ReloadPrompt.vue'

const theme = useTheme()
//toggleTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'DirtLightTheme' : 'DirtDarkTheme';
}
</script>

<template>
  <navigation>
    <router-link to="/"><v-icon icon="mdi-home"></v-icon><span>Home</span></router-link>
    <router-link to="/clubs"><v-icon icon="mdi-account-group"></v-icon><span>Clubs</span></router-link>
    <router-link to="/events"><v-icon icon="mdi-calendar-multiselect"></v-icon><span>Events</span></router-link>
    <router-link to="/about"><v-icon icon="mdi-information"></v-icon><span>About</span></router-link>
    <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" color="primary"></v-btn>
    <!-- <router-link to="/login">Log In</router-link> -->
    <!-- <router-link to="/signup">Sign Up</router-link> -->
  </navigation>
  <router-view></router-view>
  <ReloadPrompt />
</template>

<style scoped>
navigation {
  position: fixed;
  background-color: rgb(var(--v-theme-background));
  top: 0;
  width: 800px;
  display: flex;
  z-index: 1001;
}
navigation a {
  color: rgb(var(--v-theme-accent));
  font-weight: bold;
  font-size: 16pt;
  border: 1px rgb(var(--v-theme-accent)) solid;
  padding: 5px;
  width: 25%;
}
navigation a:hover {
  color: rgb(var(--v-theme-accent-hover));
  border: 1px rgb(var(--v-theme-accent-hover)) solid;
}
.router-link-active {
  border: 2px rgb(var(--v-theme-accent-hover)) solid;
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-color-white));
}

@media screen and (max-width: 800px) {
  navigation {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  navigation span {
    display: none;
  }
}
</style>
