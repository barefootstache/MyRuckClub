import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../modules/home/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: HomePage},
  {
    path: '/clubs', 
    name: 'ClubsList',
    component: () => import('../modules/clubs/ClubsListPage.vue'
  )},
  {
    path: '/club/:id',
    name: 'Club',
    component: () => import('../modules/clubs/ClubPage.vue')
  },
  {
    path: '/events',
    name: 'EventsList',
    component: () => import('../modules/events/EventsPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../modules/about/AboutPage.vue')
  },
  {
    path: '/login', 
    name: 'Login',
    component: () => import('../modules/auth/LogInPage.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../modules/auth/SignUpPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
