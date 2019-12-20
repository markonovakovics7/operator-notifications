import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000' // same as the Url the server listens to
Vue.prototype.$http = axios
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
