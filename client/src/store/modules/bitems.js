import Vue from 'vue'

const state = {
  itemType: '',
  dbResponse: [],
  itemId: '',
  errorState: ''
}

const getters = {
  itemType: state => state.itemType,
  dbResponse: state => state.dbResponse,
  itemId: state => state.itemId
}

const actions = {
  async getData ({ commit }) {
    console.log('get data from db with axios')
    await Vue.axios.get('/items/')
      .then((resp) => {
        console.log('Bitesm Store get - response from db: ', resp)
        if (resp.status === 200) {
          commit('updatedbResponse', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios get')
      })
  },
  async createNewItem ({ commit }, payload) {
    await Vue.axios.post('/items/', payload)
      .then((resp) => {
        console.log('Bitems Store create - response from db: ', resp)
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
    console.log('Store bitems - updateItem db with axios: ', payload[0]._id)
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
  updatedbResponse (state, resp) {
    state.dbResponse = resp.data
    console.log('Bitems Store - New State of dbResponse: ', state.dbResponse)
  },
  showResponse (state, resp) {
    console.log('Bitems Store - Current State dbResponse: ', state.dbResponse)
  },
  showError (resp) {
    console.log('Bitems Store - show Error: ', resp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
