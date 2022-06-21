import { faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import ('../components/Contact.vue')
  // },

  {
    path: '/course',
    name: 'Course',
    component: () => import('../views/Course.vue'),
  },

  {
    path: '/project',
    name: 'Project',
    component: () => import ('../components/Project.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
