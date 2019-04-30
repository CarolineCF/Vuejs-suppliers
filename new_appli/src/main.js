import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import keyMap from '../config.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

Vue.use(VueGoogleMaps, {
  load: {
    key: keyMap
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
