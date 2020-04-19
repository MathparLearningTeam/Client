import axios from "axios";
import authStore from "@/store/authenticationStore";
import router from "@/router";
import Vue from "vue";
import qs from "qs";
import profileStore from "@/store/profileStore";

const API = axios.create({
    baseURL: process.env.VUE_APP_API_PREFIX,
    paramsSerializer: (params) => {
        return qs.stringify(params, {arrayFormat: 'repeat'});
    }
});

API.interceptors.request.use(conf => {
    let token = authStore.getters.getToken;
    if(token) conf.headers['AUTH-TOKEN'] = token;
    let profile = profileStore.getters.get;
    if(profile) conf.headers['PROFILE-ID'] = profile.profileId
    return conf;
})
API.interceptors.response.use(resp => resp.data, (error) => {
    if (!error.response) return Promise.reject(error);
    switch (error.response.status) {
        case 401:
            Vue.prototype.$buefy.toast.open({
                duration: 10000,
                message: "You are not authorized to perform this action",
                position: 'is-bottom',
                type: 'is-danger'
            });
            break;
        case 400:
        case 500:
            Vue.prototype.$buefy.toast.open({
                duration: 10000,
                message: error.response.data.message,
                position: 'is-bottom',
                type: 'is-danger'
            });
            break;
        case 403:
            router.push({
                path: '/logout',
                query: {redirect: router.currentRoute.fullPath}
            });
            Vue.prototype.$buefy.toast.open({
                duration: 10000,
                message: error.response.data.message,
                position: 'is-bottom',
                type: 'is-danger'
            });
            break;
    }
    return Promise.reject(error.response.data);
});

export default API;
