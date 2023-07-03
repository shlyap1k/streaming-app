<template>
  <v-container>
    <p v-for="message in messages">{{message.user ? message.user.username : ''}}: {{message.text}}</p>
  </v-container>
</template>

<script>
import { socket } from '@/socket'

export default {
  name: 'MessagesList',
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    socket.on('new message', message => {
      console.log(message)
      this.messages.push(message)
    })
  }
}
</script>

<style scoped>

</style>
