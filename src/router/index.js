import Vue from 'vue'
import VueRouter from 'vue-router'

import Smoking from '@/views/Smoking.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/customerVisit',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: 'assistant',
        name: 'assistant',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: 'customerVisit',
        name: 'customerVisit',
        component: () => import('@/views/CustomerVisit.vue'),
      },
      {
        path: 'mapDistribution',
        name: 'mapDistribution',
        component: () => import('@/views/MapDistribution.vue'),
      },
    ]
  },
  {
    path: '/Smoking',
    name: 'Smoking',
    component: Smoking,
  },
  {
    path: '/created',
    name: 'created',
    component: () => import('@/views/Created.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
