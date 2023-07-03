<template>
  <v-container>
    <v-card>
      <v-card max-height="500">
        <messages-list/>
      </v-card>
      <message-box :room-name="roomName"/>
    </v-card>
  </v-container>
</template>

<script>
import MessageBox from '@/components/chat/MessageBox'
import MessagesList from '@/components/chat/MessagesList'
export default {
  name: 'ChatComponent',
  components: {
    MessagesList, MessageBox
  },
  props: {
    roomName: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>
