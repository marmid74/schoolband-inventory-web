import Vue from 'vue'

const state = {
  itemType: '',
  dbResult: [],
  itemId: ''
}

const getters = {
  itemType: state => state.itemType,
  dbResult: state => state.dbResult,
  itemId: state => state.itemId
}

const actions = {
  async getData ({ commit }) {
    console.log('get data from db with axios')
    await Vue.axios.get('/items/')
      .then((resp) => {
        console.log('response from db: ', resp)
        if (resp.status === 200) {
          commit('showData', resp)
        } else {
          commit('showError')
        }
      })
      .catch(() => {
        commit('showError')
      })
  },
  async calulateNextId ({ commit }) {
    console.log('getLastId and calculate nextId')
  }
}

const mutations = {
  showData (state, resp) {
    state.dbResult = resp.data
    console.log('State dbResult: ', state.dbResult)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
