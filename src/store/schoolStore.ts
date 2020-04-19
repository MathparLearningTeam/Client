import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api/api"
import {Account} from "@/models/Account";
import {School} from "@/models/School";

Vue.use(Vuex)

const schoolStore = new Vuex.Store({
    state: {
        school: School.placeholder()
    },
    getters: {
        async get(state) {
            if(state.school.id === School.placeholder().id)
                await api.school.getSchool().then(response => state.school = School.fromResponse(response));
            return state.school;
        }
    },
    mutations: {
        set(state, response) {
            state.school = School.fromResponse(response);
        },
        clear(state){
            state.school = School.placeholder();
        }
    },
    actions: {
    },
    modules: {
    }
})

export default schoolStore;
