import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Search',
    path: '/search',
    component: () => import('@/components/Search.vue')
  },
  {
    name: 'Startup',
    path: '/startup',
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
    component: () => import('@/components/User.vue')
  },
  {
    name: 'Companies',
    path: '/companies',
    component: () => import('@/components/Companies.vue')
  },
  {
    name: 'company',
    path: '/companies/:id',
    props: true,
    component: () => import('@/components/Company.vue')
  },
  {
    name: 'editCompany',
    path: '/companies/edit/:id',
    props: true,
    component: () => import('@/components/EditCompany.vue')
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/components/Profile.vue'),
    meta: {requiresAuth: true}
  },
  {
    name: 'newCompany',
    path: '/newcompany',
    component: () => import('@/components/NewCompany.vue'),
    meta: {requiresAuth: true}
  },
  {
    name: 'Supportentity',
    props: true,
    path: '/supportentities/:id',
    component: () => import('@/components/Supportentity.vue')
  },
  {
    name: 'Supportentities',
    path: '/supportentities',
    component: () => import('@/components/Supportentities.vue')
  },
  {
    name: 'Corporates',
    path: '/corporates',
    component: () => import('@/components/Supportentities/Corporates.vue')
  },
  {
    name: 'Venture',
    path: '/venture',
    component: () => import('@/components/Supportentities/Venture.vue')
  },
  {
    name: 'Accelerators',
    path: '/accelerators',
    component: () => import('@/components/Supportentities/Accelerators.vue')
  },
  {
    name: 'Incubators',
    path: '/incubators',
    component: () => import('@/components/Supportentities/Incubators.vue')
  },
  {
    name: 'Pilot',
    path: '/pilot',
    component: () => import('@/components/Supportentities/Pilot.vue')
  },
  {
    name: 'Coworkings',
    path: '/coworkings',
    component: () => import('@/components/Supportentities/Coworkings.vue')
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
