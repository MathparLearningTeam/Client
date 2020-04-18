import axios from 'axios'
import Vue from 'vue'
import router from "@/router";
import qs from 'qs';
import store from './store'

const get = {
    headers: () => {
        console.log(store.state.token)
        return store.state.token ? {'AUTHTOKEN': store.state.token} : {}
    }
};

const API = axios.create({
    baseURL: process.env.VUE_APP_API_PREFIX,
    headers: get.headers(),
    paramsSerializer: (params) => {
        return qs.stringify(params, {arrayFormat: 'repeat'});
    }
});

API.interceptors.response.use(resp => resp.data, (error) => {
    if (error.response) {
        if (error.response.status === 401) {
            router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath},
            });
        }
        if (error.response.status === 400 || error.response.status === 500) {
            Vue.prototype.$buefy.toast.open({
                duration: 10000,
                message: error.response.data.message,
                position: 'is-bottom',
                type: 'is-danger'
            });
        }
        if (error.response.status === 403) {
            router.replace({
                path: '/login',
                query: {redirect: router.currentRoute.fullPath},
            });
            Vue.prototype.$buefy.toast.open({
                duration: 10000,
                message: error.response.data.message,
                position: 'is-bottom',
                type: 'is-danger'
            });
        }
    }
    return Promise.reject(error.response.data);
});

const account = {
    checkEmail: (email: any) => API.get(`/account/api/emailAvailable?email=${email}`),
    createAccount: (params: any) => API.post(`/account/api/`, params),
    authenticate: (params: any) => API.post(`/authentication/authenticate`, params),
    restore: (params: any) => API.get(`/restoration/restorePassword`, {params}),
    setPassword: (params: any) => API.post(`/restoration/changePassword`, params)
};

const user = {
    user: () => API.get(`/school/user`)
};

const school = {
    school: () => API.get(`/school`),
    users: () => API.get(`/school/users`),
    createStudent: (params: any) => API.post(`/school/createStudent`, params),
    createTeacher: (params: any) => API.post(`/school/createTeacher`, params),
    createHeadTeacher: (params: any) => API.post(`/school/createHeadTeacher`, params)
};

export default {
    account, user, school
}
