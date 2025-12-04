import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Vuetify
import vuetify from './plugins/vuetify';

// Analytics
// import VercelAnalyticsPlugin from './plugins/analytics';
import { inject } from '@vercel/analytics';

inject();

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);
// eslint-disable-next-line
app.use(router as any);
// eslint-disable-next-line
app.use(vuetify as any);
// eslint-disable-next-line
app.use(pinia as any);
// app.use(VercelAnalyticsPlugin);
app.mount('#app');