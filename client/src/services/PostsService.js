import api from '@/services/api'

export default {
  async fetchPosts () {
    return await api().get('posts')
  },
  deletePost(postId) {
    return api().delete(`posts/${postId}`)
  }
}
