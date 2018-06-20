
import Vue from 'vue'
import App from './App'
import router from './router/router'
import createStore from './store/store'
import Router from 'vue-router'
import Vuex from 'vuex'

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
