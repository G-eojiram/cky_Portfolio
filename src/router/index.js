import { createRouter, createWebHistory } from 'vue-router'
import intro from '../views/landing_page.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: intro
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
