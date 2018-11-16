import Vue from 'vue'
import VueCRM from './VueCRM.vue'
import router from './router'
import store from './store'

import './crm.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(VueCRM)
}).$mount('#vue-crm')
