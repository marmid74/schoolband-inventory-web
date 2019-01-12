// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import axios from 'axios'
import SmartTable from 'vuejs-smart-table'

import 'vuetify/dist/vuetify.min.css'
//  import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3333/api'
})

Vue.use(SmartTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
