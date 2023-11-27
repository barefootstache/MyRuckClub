import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './modules/home/HomePage.vue'

const routes = [
  {path: '/', component: HomePage},
  {
    path: '/clubs', 
    component: () => import('./modules/clubs/ClubsListPage.vue'
  )},
  {
    path: '/club/:id',
    name: 'club',
    component: () => import('./modules/clubs/ClubPage.vue')
  },
  {path: '/events', component: () => import('./modules/events/EventsPage.vue'
)},
  {path: '/about', component: () => import('./modules/about/AboutPage.vue'
)},
  {path: '/login', component: () => import('./modules/auth/LogInPage.vue'
)},
  {path: '/signup', component: () => import('./modules/auth/SignUpPage.vue'
)},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')
