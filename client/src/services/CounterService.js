import api from '@/services/api'

export default {
  async fetchCounters () {
    return await api().get('counters')
  }
}
