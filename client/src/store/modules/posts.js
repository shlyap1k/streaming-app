import posts from '../../services/PostsService'

const state = () => ({
  all: []
})

const getters = {
  allPosts(state) {
    return state.all
  }
}

const actions = {
  async getAllPosts ({ commit }) {
    const allPosts = await posts.fetchPosts()
    commit('setPosts', allPosts.data.posts)
  }
}

const mutations = {
  setPosts (state, posts) {
    state.all = posts
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
