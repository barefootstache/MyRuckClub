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
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 8px;
  padding: 12px;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  width: calc(100% - 16px);
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-color-white));
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid rgb(var(--v-theme-accent));
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
  background-color: rgb(var(--v-theme-secondary));
  color: rgb(var(--v-color-white));
}
</style>
