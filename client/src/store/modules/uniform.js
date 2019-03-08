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
    console.log('Uniform store - get data from db with axios')
    await Vue.axios.get('/asset/uniform/')
      .then((resp) => {
        console.log('Uniform Store get - response from db: ', resp)
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
  async addNewItem ({ commit }, payload) {
    console.log('Store Add Uniform ')
    await Vue.axios.post('/asset/uniform/', payload)
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          console.log('Uniform saved to db: ', resp.data.body)
          commit('addItemtoState', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios post')
      })
  },
  async updateUniform ({ commit }, payload) {
    console.log('Store Update Uniform')
    console.log('Store UpdateUniform - update db with axios: ', payload[0]._id)
    await Vue.axios.put('/asset/uniform/' + payload[0]._id, payload[0])
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
    console.log('Uniform Store - Update State of dbResponse: ', state.dbResponse)
  },
  addItemtoState (state, resp) {
    state.dbResponse.push(resp.data.body)
    console.log('Uniform Store - Adds new item to state: ', state.dbResponse)
  },
  showResponse (resp) {
    console.log('Uniform store - Show OK db response: ', resp)
  },
  showError (resp) {
    console.log('Uniform Store - Show Error db response: ', resp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
