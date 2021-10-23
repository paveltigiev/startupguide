import Vue from 'vue'
import VueRouter from 'vue-router'
// import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/startup',
    name: 'Startup',
    component: () => import('@/components/Startup.vue')
  },
  {
    path: '/startups',
    name: 'Startups',
    component: () => import('@/components/Startups.vue')
  },
  {
    path: '/companies',
    name: 'Companies',
    component: () => import('@/components/Companies.vue')
  },
  {
    name: 'company',
    path: '/companies/:id',
    props: true,
    component: () => import('@/components/Company')
    // beforeEnter: AuthGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
