import cameras from '../../services/CameraService'

const state = () => ({
  cameras: []
})

const getters = {
  allCameras(state) {
    return state.cameras
  }
}

const actions = {
  async getAllCameras ({ commit }) {
    const allCameras = await cameras.fetchCameras()
    commit('setCameras', allCameras.data.cameras)
  },
  async postCamera ({ commit }, camera) {
    const allCameras = await cameras.camera_post(camera.url, camera.name, camera.description).then(
      response => {

      },
      error => {
        console.log(error)
      })
  }
}

const mutations = {
  setCameras (state, cameras) {
    state.all = cameras
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
