import Vue from 'vue'
import VueRouter from 'vue-router'

import Rating from '@/views/Rating.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/rating',
    name: 'Rating',
    component: Rating,
  },
  {
    path: '/rating/*',
    redirect: { name: 'Rating' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
