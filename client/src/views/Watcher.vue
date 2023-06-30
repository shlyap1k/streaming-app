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
  name: "Watcher",
  components: {WatchingVideo}
}
</script>
