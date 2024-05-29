import { createStore, createLogger } from 'vuex'
import posts from './modules/posts'
import counters from './modules/counters'
import cameras from './modules/camera'
import { auth } from './modules/auth';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    counters,
    cameras,
    posts,
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

