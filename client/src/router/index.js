import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Dashboard.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router