import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Vuetify
import vuetify from './plugins/vuetify';

const app = createApp(App);
// eslint-disable-next-line
app.use(router as any);
// eslint-disable-next-line
app.use(vuetify as any);
app.mount('#app');
