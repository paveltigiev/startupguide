import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

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
  },
  {
    name: 'editCompany',
    path: '/companies/edit/:id',
    props: true,
    component: () => import('@/components/EditCompany')
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/components/Profile'),
    meta: {requiresAuth: true}
  },
  {
    name: 'newCompany',
    path: '/newcompany',
    component: () => import('@/components/NewCompany'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
