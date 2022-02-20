import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/Course.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
