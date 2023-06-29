import api from '@/services/api'

export default {
  async profile() {
    return await api().get('api/profile', {withCredentials: true})
  },
  async login (username, password) {
    return await api().post('login', {username, password}, {withCredentials: true})
  },
  async logout () {
    return await api().post('logout', {}, {withCredentials: true})
  },
  async signup (username, password, firstname, lastname) {
    return await api().post('signup', {username, password, firstname, lastname})
  }
}
