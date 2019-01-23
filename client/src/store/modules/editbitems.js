import Vue from 'vue'

const state = {
  itemType: '',
  dbResponse: [],
  itemId: '',
  errorState: ''
}

const getters = {
  dbResponse: state => state.dbResponse
}

const actions = {
  async createNewItem ({ commit }, payload) {
    await Vue.axios.post('/items/', payload)
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          commit('showResponse', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios post')
      })
  },
  async updateItem ({ commit }, payload) {
    console.log('Store EditItems - updateItem db with axios: ', payload[0]._id)
    await Vue.axios.put('/items/' + payload[0]._id, payload)
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          commit('showResponse', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios put')
      })
  }
}

const mutations = {
  showResponse (state, resp) {
    state.dbResponse = resp.data
    console.log('New State of dbResponse: ', state.dbResponse)
  },
  showError (resp) {
    console.log('show Error: ', resp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
