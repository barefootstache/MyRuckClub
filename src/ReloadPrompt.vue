<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue';
import { pwaInfo } from 'virtual:pwa-info';

console.log(pwaInfo);

// replaced dyanmicaly
const reloadSW: unknown = '__RELOAD_SW__';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    console.log(`Service Worker at: ${swUrl}`);
    if (reloadSW === 'true') {
      r &&
        setInterval(async () => {
          console.log('Checking for sw update');
          await r.update();
        }, 20000 /* 20s for testing purposes */);
    } else {
      console.log(`SW Registered: ${r}`);
    }
  },
});

async function closeBtn() {
  offlineReady.value = false;
  needRefresh.value = false;
}
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
    <button @click="closeBtn">Close</button>
  </div>
</template>

<style>
.pwa-toast {
  background-color: rgb(var(--v-theme-primary));
  border-radius: 4px;
  border: 1px solid rgb(var(--v-theme-accent));
  bottom: 0;
  color: rgb(var(--v-color-white));
  margin: 8px;
  padding: 12px;
  position: fixed;
  right: 0;
  text-align: left;
  width: calc(100% - 16px);
  z-index: 400;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  background-color: rgb(var(--v-theme-secondary));
  border-radius: 2px;
  border: 1px solid rgb(var(--v-theme-accent));
  color: rgb(var(--v-color-white));
  margin-right: 5px;
  outline: none;
  padding: 3px 10px;
}
</style>