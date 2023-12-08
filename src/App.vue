<script setup lang="ts">
</script>

<template>
  <navigation>
    <router-link to="/">Home</router-link>
    <router-link to="/clubs">Clubs</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/login">Log In</router-link> -->
    <!-- <router-link to="/signup">Sign Up</router-link> -->
  </navigation>
  <router-view></router-view>
</template>

<style scoped>
navigation a {
  margin: 0 5px;
  color: wheat;
  font-weight: bold;
  font-size: 16pt;
  border: 1px wheat solid;
  padding: 5px;
}
.router-link-active {
  border: 2px wheat solid;
  background-color: rgba(255, 255, 255, 0.15);
}

@media screen and (max-width: 800px) {
  navigation {
    position: absolute;
    top: 6px;
    left: 0;
  }
  #app > div {
    margin-top: 50px;
  }
}
</style>
