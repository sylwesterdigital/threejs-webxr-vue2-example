import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import feather from 'vue-icon'
Vue.use(feather, 'v-icon')

//md5 is available everywehre as this.$md5('asdasdasd')
import MD5 from 'md5'
Object.defineProperty(Vue.prototype, '$md5', { value: MD5 });

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use( CKEditor );

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFriendlyIframe from 'vue-friendly-iframe';
Vue.use(VueFriendlyIframe);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
