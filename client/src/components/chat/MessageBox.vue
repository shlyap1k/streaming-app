<template>
  <v-container>
    <v-form name="form" @submit.prevent="onSubmit">
      <v-row>
        <v-col cols="10">
          <v-text-field
            v-model="text"
            :rules="[rules.required, rules.counter]"
            counter
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn type="submit" icon="mdi-send"></v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { socket } from '@/socket'

export default {
  name: 'MessageBox',
  data() {
    return {
      text: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 140 || 'Max 140 characters',
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },
  props: {
    roomName: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit() {
      socket.emit('new message', {
        roomName: this.roomName,
        text: this.text,
        user: this.user
      })
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
