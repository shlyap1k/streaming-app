import axios from 'axios'
import router from '@/router'

// export const API = axios.create({
//   baseURL: `http://localhost:8081`,
// })

// API.interceptors.response.use(null, function (error) {
//   console.log('abboba')
//   console.log(JSON.stringify(error))
//   if (error.response.status === 401) {
//     console.log('Failed to login')
//     router.push('/login')
//   }
//   return Promise.reject(error)
// })

export default () => {
  console.log(import.meta.env.VITE_SERVER)
  return axios.create({
    baseURL: import.meta.env.VITE_SERVER
  })
}


