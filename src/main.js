import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'onsenui/css/onsenui.css';
// import 'onsenui/css/dark-onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';
import vuescroll from 'vue-scroll'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(vuescroll)
Vue.config.productionTip = false
Vue.use(VueOnsen);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain

  providers: {
    github: {
      clientId: '',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')