import Vue from 'vue'

const state = {
  email: '',
  userId: null,
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

const actions = {
  async logInUser ({ commit }, payload) {
    console.log('Client actions: ', payload)
    let url = '/users/email/' + payload.email
    await Vue.axios.post(url, payload)
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          commit('logInUser', payload)
        } else {
          commit('loginError')
        }
      })
      .catch(() => {
        commit('loginError')
      })
  }
}

const mutations = {
  logInUser (state, payload) {
    state.email = payload.email
    state.userId = payload.userId
    state.isLoggedIn = true
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or password are invalid. Login failed.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
