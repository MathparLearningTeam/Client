import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api/api"
import {Account} from "@/models/Account";

Vue.use(Vuex)

const accountStore = new Vuex.Store({
  state: {
    account: Account.placeholder()
  },
  getters: {
    async account(state) {
      if(state.account.accountId === Account.placeholder().accountId){
        await api.account.getAccount().then(response => state.account = Account.fromResponse(response));
      }
      return state.account;
    }
  },
  mutations: {
    setAccount(state, response) {
      state.account = Account.fromResponse(response);
    },
    clearAccount(state){
      state.account = Account.placeholder();
    }
  },
  actions: {
  },
  modules: {
  }
})

export default accountStore;
