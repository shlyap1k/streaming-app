import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
});

const URL = import.meta.env.VITE_SOCKET_SERVER

export const socket = io(URL)
