import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api/api"
import {Account} from "@/models/Account";
import {School} from "@/models/School";
import {Profile} from "@/models/Profile";
import {currentConfig} from "vee-validate/dist/types/config";

Vue.use(Vuex)

const localStorageKey = 'profile';

const profileStore = new Vuex.Store({
    state: {
        currentProfile: Profile.placeholder(),
        profiles: []
    },
    getters: {
        get(state) {
            if (state.currentProfile.profileId === Profile.placeholder().profileId) {
                let currentProfile = localStorage.getItem(localStorageKey);
                if (!currentProfile) return null;
                state.currentProfile = JSON.parse(currentProfile);
            }
            return state.currentProfile;
        },
        async getAll(state) {
            if (state.profiles.length === 0) await api.school.getProfiles().then((response: any) => state.profiles = response);
            return state.profiles;
        }
    },
    mutations: {
        set(state, response) {
            state.currentProfile = Profile.fromResponse(response);
            localStorage.setItem(localStorageKey, JSON.stringify(state.currentProfile))
        },
        clear(state) {
            localStorage.removeItem(localStorageKey)
            state.currentProfile = Profile.placeholder();
            state.profiles = []
        }
    },
    actions: {
        async refresh(ctx) {
            api.school.getProfiles().then((response: any) => ctx.state.profiles = response)
        }
    },
    modules: {}
})

export default profileStore;
