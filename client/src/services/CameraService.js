import api from '@/services/api'

export default {
  async fetchCameras() {
    return await api().get('cameras')
  },
  async camera_post (url, name, description) {
    return await api().post('camera', {url, name, description}, {withCredentials: true})
  }
}
