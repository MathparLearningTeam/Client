import Vue from 'vue'
import VueRouter from 'vue-router'
import {authenticated, notAuthenticated} from "@/router/interceptors";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/registration',
        name: 'registration',
        meta: {
            notAuthenticated: true,
            redirectTo: 'account'
        },
        component: () => import('../views/account/Registration.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            notAuthenticated: true,
            redirectTo: 'account'
        },
        component: () => import('../views/account/Login.vue')
    },
    {
        path: '/restore',
        name: 'restore',
        meta: {
            notAuthenticated: true,
            redirectTo: 'account'
        },
        component: () => import('../views/account/RestorePassword.vue')
    },
    {
        path: '/restore/:t',
        name: 'set-password',
        meta: {
            notAuthenticated: true,
            redirectTo: 'account'
        },
        component: () => import('../views/account/SetPassword.vue')
    },
    {
        path: '/account',
        name: 'account',
        meta: {
            authenticated: true,
            redirectTo: 'login'
        },
        component: () => import('../views/account/Account.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
            authenticated: true,
            redirectTo: '/'
        },
        component: () => import('../views/Logout.vue')
    },
    {
        path: '/choose-profile',
        name: 'ChooseProfile',
        meta: {
            authenticated: true,
            redirectTo: '/login'
        },
        component: () => import('../views/ChooseProfile.vue')
    },
    {
        path: '/apply-for-position',
        name: 'ApplyForPositionCard',
        meta: {
            authenticated: true,
            redirectTo: '/login'
        },
        component: () => import('../views/account/ApplyForPositionCard.vue')
    },
    {
        path: '/school',
        name: 'School',
        meta: {
            authenticated: true,
            redirectTo: '/'
        },
        component: () => import('../views/school/School.vue'),
        children: [
            {
                path: '', component: () => import('../components/school/SchoolUsers.vue')
            },
            {
                path: 'groups', component: () => import('../components/school/SchoolGroups.vue')
            },
            {
                path: 'plans', component: () => import('../components/school/SchoolPlans.vue')
            },
            {
                path: 'task/:id', component: () => import('../components/school/tasks/TaskView.vue')
            }
        ]
    }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

router.beforeEach(authenticated);
router.beforeEach(notAuthenticated)

export default router
