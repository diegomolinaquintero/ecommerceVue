import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Car from '../views/Car.vue';
import Ordenes from '../views/Ordenes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: Ordenes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
