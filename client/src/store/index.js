import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import bitems from './modules/bitems'
import configuniform from './modules/configuniform'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    bitems,
    configuniform
  }
})
