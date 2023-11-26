<script setup lang="ts">
</script>

<template>
  <navigation>
    <router-link to="/">Home</router-link>
    <router-link to="/clubs">Clubs</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">Log In</router-link>
    <router-link to="/signup">Sign Up</router-link>
  </navigation>
  <router-view></router-view>
</template>

<style scoped>
navigation a {
  margin: 5px;
}
</style>
