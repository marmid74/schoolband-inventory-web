import Vue from 'vue'

const state = {
  dbConfigUniform: [],
  errorState: ''
}

const getters = {
  dbConfigUniform: state => state.dbConfigUniform
}

const actions = {
  async getConfigUniform ({ commit }) {
    console.log('ConfigUniform Store - get data from db with axios')
    await Vue.axios.get('/config/uniforms/')
      .then((resp) => {
        console.log('ConfigUniform get - response from db: ', resp)
        if (resp.status === 200) {
          commit('dbConfigUniform', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios get')
      })
  }
  /*  async addNewItem ({ commit }, payload) {
    console.log('Store Create Bitems ')
    await Vue.axios.post('/items/', payload)
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          console.log('Item saved to db: ', resp.data.body)
          commit('addItemtoState', resp)
        } else {
          commit('showError', resp)
        }
      })
      .catch(() => {
        commit('showError', 'Error: failed in Vue axios post')
      })
  },
  async updateItem ({ commit }, payload) {
    console.log('Store Update Items')
    console.log('Store UpdateItems - updateItem db with axios: ', payload[0]._id)
    await Vue.axios.put('/items/' + payload[0]._id, payload[0])
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
*/
}

const mutations = {
  dbConfigUniform (state, resp) {
    state.dbConfigUniform = resp.data
    console.log('ConfigUniform - Update State of dbConfigUniform: ', state.dbConfigUniform)
  },
  /*  addItemtoState (state, resp) {
    state.dbResponse.push(resp.data.body)
    console.log('Bitems Store - Adds new item to state: ', state.dbResponse)
  }, */
  showResponse (resp) {
    console.log('ConfigUniform store - Show OK db response: ', resp)
  },
  showError (resp) {
    console.log('ConfigUniform Store - Show Error db response: ', resp)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
