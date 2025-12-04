<script setup lang="ts">
</script>

<template>
  <v-list-item>
    <template #prepend>
        <v-avatar size="90"> </v-avatar>
    </template>
    <template #title>
      <span /><br />
    </template>
    <template #subtitle>
      <span style="width: 40%;" /><br />
      <span style="width: 30%;" /><br />
      <span style="width: 60%;" /><br />
      <span style="width: 60%;" /><br />
    </template>
  </v-list-item>
</template>

<style scoped>
.v-list-item {
  outline: 1px rgba(var(--v-theme-surface), 0.87) solid;
  margin-bottom: 4px;
  padding: 0 4px;
}

.v-list-item-subtitle span, .v-list-item-title span {
  line-height: 1.5;
  font-size: 1rem;
  display: block;
  height: 16px;
  animation: pulse-bg 1s infinite;
}
.v-list-item-title span {
  margin-top: 4px;
  width: 50%;
}
.v-avatar {
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: rgba(var(--v-theme-surface), 0.67);
  }
  50% {
    background-color: rgba(var(--v-theme-surface), 0.87);
  }
  100% {
    background-color: rgba(var(--v-theme-surface), 0.67);
  }
}
</style>