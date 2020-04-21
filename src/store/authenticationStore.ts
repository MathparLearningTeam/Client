import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStorageKey = 'token';

const store = new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    getToken(state){
      if(!state.token) state.token = localStorage.getItem(localStorageKey) || '';
      return state.token;
    }
  },
  mutations: {
    setToken(state, token){
      localStorage.setItem(localStorageKey, token);
      state.token = token;
    },
    clearToken(state){
      localStorage.removeItem(localStorageKey);
      state.token = ''
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;