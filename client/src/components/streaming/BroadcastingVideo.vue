<template>
  <v-row no-gutters>
    <v-col align-self="center">
      <v-card max-width="1200" class="pa-2 ma-2">
        <v-responsive aspect-ratio="16/9">
          <v-card-title>
            Трансляция с веб-камеры
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <video playsinline autoplay muted id="video"></video>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-btn v-if="!started" v-on:click="startStreaming" color="#80CBC4" text="Начать трансляцию"></v-btn>
                <v-btn v-else v-on:click="stopStreaming" color="#EF9A9A" text="Завершить трансляцию"></v-btn>
              </v-col>
              <v-col cols="3" v-if="!started">
                <v-text-field
                  label="Название трансляции"
                  v-model="streamName"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="3" v-else>
                {{streamName}}
              </v-col>
              <v-col cols="3">
                Длительность трансляции: {{("0" + (time/3600>>0)).slice(-2)
                }}:{{("0" + (time/60>>0)).slice(-2)
                }}:{{("0" + Number(((time/60-(time/60>>0))*60).toFixed(0))).slice(-2)}}
              </v-col>
              <v-col cols="3">
                <v-icon color="#F44336">mdi-account-outline</v-icon> <span class="red--text">{{viewers}}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <section class="select">
                  <label for="audioSource">Источник аудио: </label>
                  <select id="audioSource"></select>
                </section>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <section class="select">
                  <label for="videoSource">Источник видео: </label>
                  <select id="videoSource"></select>
                </section>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
          </v-card-actions>
        </v-responsive>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: "BroadcastingVideo",
  data() {
    return {
      time: 0,
      interval: null,
      streamName: 'Прямая трансляция',
      viewers: 0,
      started: false,
      peerConnections: {},
      config: {
        iceServers: [
          {
            "urls": "stun:stun.l.google.com:19302",
          }
        ]
      },
      socket: null,//io.connect('http://localhost:8081/',),
      videoElement: document.querySelector("video"),
      audioSelect: document.querySelector("select#audioSource"),
      videoSelect: document.querySelector("select#videoSource"),
      room: {},
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },
  methods: {
    stopStreaming() {
      this.started = false
      this.viewers = 0
      this.socket.emit('end of stream', {
        streamName: this.streamName,
        roomName: this.user.username,
      })
    },
    startStreaming() {
      this.started = true
      this.socket = io.connect('http://localhost:8081/',)
      this.socket.emit('create room', {
        streamName: this.streamName,
        roomName: this.user.username,
      })

      this.socket.on('stream info', data => {
        this.viewers = data.viewers
      })

      window.onunload = window.onbeforeunload = () => {
        this.viewers = 0
        this.socket.emit('end of stream', {
          streamName: this.streamName,
          roomName: this.user.username,
        })
        this.socket.close();
        this.peerConnection.close();
      };
    }
  }
}
</script>

<style scoped>
#video{
  width:100%;
  height:100%;
}
</style>
