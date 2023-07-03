<template>
  <v-container>
    <v-row>
      <v-list v-for="room in rooms" v-if="rooms.length > 0">
        <router-link :to="'/watch/'+room.roomName">
          <v-card width="250" variant="outlined">
            <v-img :src="room.image" v-if="room.image">

            </v-img>
            <v-card-title>
              {{room.streamName}}
            </v-card-title>
            <v-card-subtitle>
              {{room.roomName}}
            </v-card-subtitle>
            <v-card-text>
              Зрителей: {{room.members.length}}
            </v-card-text>
          </v-card>
        </router-link>
      </v-list>
      <v-card v-else>
        <v-card-text>
          Пока что нет ни одной трансляции
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  name: "ListOfBroadcasters",
  data() {
    return {
      socket: io.connect(import.meta.env.VITE_SOCKET_SERVER,),
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
