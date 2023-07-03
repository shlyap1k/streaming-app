<template>
  <v-row>
    <v-col>
      <watching-video/>
    </v-col>
  </v-row>
</template>

<script>
import WatchingVideo from '../components/streaming/WatchingVideo'

export default {
  name: 'Watcher',
  components: {WatchingVideo},
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
