<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
//toggleTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'DirtLightTheme' : 'DirtDarkTheme';
}
</script>

<template>
  <navigation>
    <router-link to="/">Home</router-link>
    <router-link to="/clubs">Clubs</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/about">About</router-link>
    <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" color="primary"></v-btn>
    <!-- <router-link to="/login">Log In</router-link> -->
    <!-- <router-link to="/signup">Sign Up</router-link> -->
  </navigation>
  <router-view></router-view>
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
#app > div {
  margin-top: 50px;
}

@media screen and (max-width: 800px) {
  navigation {
    width: 100%;
  }
}
</style>
