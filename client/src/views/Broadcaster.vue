<template>
  <v-row>
    <v-col>
      <broadcasting-video/>
    </v-col>
  </v-row>
</template>

<script>
import BroadcastingVideo from '@/components/streaming/BroadcastingVideo'
export default {
  components: {BroadcastingVideo},
  name: 'broadcaster',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
    user() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  }
}
</script>
