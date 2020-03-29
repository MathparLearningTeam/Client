import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
// @ts-ignore
import api from '../api'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/auth/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/restore',
    name: 'restore',
    component: () => import('../views/auth/RestorePassword.vue')
  },
  {
    path: '/restore/:t',
    name: 'set-password',
    component: () => import('../views/auth/SetPassword.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/school/SchoolProfile.vue')
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user) {
      next();
    } else {
      api.user.user().then((response: any) => {
        store.state.user = response;
        if (!store.state.user) {
          next({ name: 'profile' })
        } else {
          next()
        }
      });
    }
  } else {
    next()
  }
});

export default router
