import api from '@/services/api'

export default {
  async login (username, password) {
    const login = await api().post('login', {username, password}, {withCredentials: true})
    console.log(login)
    return login
  },
  async logout () {
    return await api().get('logout')
  },
  async signup (username, password, firstname, lastname) {
    return await api().post('signup', {username, password, firstname, lastname})
  }
}
