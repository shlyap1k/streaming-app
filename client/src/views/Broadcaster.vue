<template>
  <v-row>
    <v-col>
      <broadcasting-video/>
    </v-col>
  </v-row>
</template>

<script>
import BroadcastingVideo from "@/components/streaming/BroadcastingVideo";
export default {
  components: {BroadcastingVideo},
  name: "broadcaster"
}
</script>
