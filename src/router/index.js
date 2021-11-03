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
    name: 'Startups',
    path: '/startups',
    component: () => import('@/components/Startups.vue')
  },
  {
    name: 'users',
    path: '/users',
    component: () => import('@/components/Users.vue')
  },
  {
    name: 'user',
    path: '/users/:id',
    props: true,
    component: () => import('@/components/User')
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
  },
  {
    name: 'Supportentity',
    props: true,
    path: '/supportentities/:id',
    component: () => import('@/components/Supportentity')
  },
  {
    name: 'Supportentities',
    path: '/supportentities',
    component: () => import('@/components/Supportentities')
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
