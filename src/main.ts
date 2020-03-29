import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

Vue.use(VueAxios, axios)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
