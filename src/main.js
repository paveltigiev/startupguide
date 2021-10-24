import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

// axios.defaults.baseURL = 'https://startbase.online/api/web/'
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.access_token

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
