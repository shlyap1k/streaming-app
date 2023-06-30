<template>
  <v-container>
    <v-list v-for="room in rooms">
      <router-link :to="'/watch/'+room[0]">
        {{room[1]}}, {{room[2]}}
      </router-link>
    </v-list>
  </v-container>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  name: "ListOfBroadcasters",
  data() {
    return {
      socket: io.connect('http://localhost:8081/',),
      rooms: []
    }
  },
  user() {
    return this.$store.state.auth.user
  },
  mounted() {
    this.socket.emit('get rooms')
    this.socket.on('rooms list', rooms => {
      console.log(rooms)
      this.rooms = rooms
    })
    this.socket.on('end of stream', () => {
      console.log('end of stream')
    })
  }
}
</script>

<style scoped>

</style>
