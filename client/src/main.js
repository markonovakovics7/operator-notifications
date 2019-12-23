import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import QuestionHub from './question-hub'


//import io from 'socket.io-client'; //eslint-disable-line
//import VueSocketIO from 'vue-socket.io'
//console.log(io); // eslint-disable-line
//eslint-disable-next-line

//const socket = io('http://localhost:5001');

//Vue.use(socket);

 //eslint-disable-next-line
const options = { path: '/' };



/* Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://metinseylan.com:1992', options),//eslint-disable-line
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);
 */

///import axios from 'axios'

/* 
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000' // same as the Url the server listens to
Vue.prototype.$http = axios */
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
