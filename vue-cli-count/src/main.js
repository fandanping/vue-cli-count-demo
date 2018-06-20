import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import router from './router/router'
import createStore from './store/store'

Vue.use(Vuex)
Vue.use(Router)

Vue.config.productionTip = false
const store=createStore()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
