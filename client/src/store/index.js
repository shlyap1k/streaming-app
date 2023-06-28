import { createStore, createLogger } from 'vuex'
import posts from './modules/posts'
import { auth } from './modules/auth';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    posts,
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

