import axios from 'axios'
import Vue from 'vue'
import router from "@/router";
import qs from 'qs';
import authStore from './store/authenticationStore'

const API = axios.create({
    baseURL: process.env.VUE_APP_API_PREFIX,
    paramsSerializer: (params) => {
        return qs.stringify(params, {arrayFormat: 'repeat'});
    }
});

API.interceptors.request.use(conf => {
    let token = authStore.getters.getToken;
    if(token) conf.headers['AUTH-TOKEN'] = token;
    return conf;
})
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
    getAccount: () => API.get(`/account/api/`),
    authenticate: (params: any) => API.post(`/account/api/authenticate`, params),
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
