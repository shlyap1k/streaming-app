import counters from '../../services/CounterService'

const state = () => ({
  all: []
})

const getters = {
  allCounters(state) {
    return state.counters
  }
}

const actions = {
  async getAllCounters ({ commit }) {
    const allCounters = await counters.fetchCounters()
    commit('setCounters', allCounters.data.count)
  }
}

const mutations = {
  setCounters (state, counters) {
    state.all = counters
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
