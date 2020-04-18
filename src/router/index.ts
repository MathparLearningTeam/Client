import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/authenticationStore'
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
    component: () => import('../views/account/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/restore',
    name: 'restore',
    component: () => import('../views/account/RestorePassword.vue')
  },
  {
    path: '/restore/:t',
    name: 'set-password',
    component: () => import('../views/account/SetPassword.vue')
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/account/Account.vue')
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router
