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
  border: 2px #d3c68b solid;
  background-color: rgba(255, 255, 255, 0.10);
  color: #d3c68b;
}

@media screen and (max-width: 800px) {
  navigation {
    position: fixed;
    background-color: #242424;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px #d3c68b solid;
    display: flex;
    z-index: 1001;
  }
  navigation a {
    margin: 0;
    width: 25%;
  }
  #app > div {
    margin-top: 50px;
  }
}

@media (prefers-color-scheme: light) {
  navigation {
    border-bottom-color: #020281;
    background-color: #ffffff;
  }
  navigation a {
    color: #020281;
    border: 1px #020281 solid;
  }
  .router-link-active {
    border: 2px #43437c solid;
    background-color: rgba(0, 0, 0, 0.1);
    color: #43437c;
  }
}
</style>
