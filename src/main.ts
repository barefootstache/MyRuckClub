import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Vuetify
import vuetify from './plugins/vuetify';

// Analytics
import analytics from './plugins/analytics';

const app = createApp(App);
// eslint-disable-next-line
app.use(router as any);
// eslint-disable-next-line
app.use(vuetify as any);
// eslint-disable-next-line
app.use(analytics as any);
app.mount('#app');