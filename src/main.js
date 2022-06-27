import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import feather from 'vue-icon'
Vue.use(feather, 'v-icon')


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

// Vue.config.productionTip = false;
// Vue.config.devtools = false;


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
