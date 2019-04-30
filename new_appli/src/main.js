import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const router = new VueRouter({
  routes 
})




new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 
