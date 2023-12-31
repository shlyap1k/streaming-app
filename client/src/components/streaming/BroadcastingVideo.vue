<template>
  <v-row no-gutters>
    <v-col cols="8">
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
              <v-col cols="auto">
                <v-btn v-if="!started" v-on:click="startStreaming" color="#80CBC4" text="Начать трансляцию"></v-btn>
                <v-btn v-else v-on:click="stopStreaming" color="#EF9A9A" text="Завершить трансляцию"></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn v-if="started" v-on:click="takePicture" text="Заставка"></v-btn>
              </v-col>
              <v-col cols="3" v-if="!started">
                <v-text-field
                  label="Название трансляции"
                  v-model="streamName"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="auto" v-else>
                {{streamName}}
              </v-col>
              <v-col cols="auto">
                Длительность трансляции: {{("0" + (time/3600>>0)).slice(-2)
                }}:{{("0" + (time/60>>0)).slice(-2)
                }}:{{("0" + Number(((time/60-(time/60>>0))*60).toFixed(0))).slice(-2)}}
              </v-col>
              <v-col cols="auto">
                <v-icon color="#F44336">mdi-account-outline</v-icon> <span class="red--text">{{viewers}}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <section class="select">
                    <label for="audioSource">Источник аудио: </label>
                    <select id="audioSource"></select>
                  </section>
                </v-row>
                <v-row>
                  <section class="select">
                    <label for="videoSource">Источник видео: </label>
                    <select id="videoSource"></select>
                  </section>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-responsive>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-row align-self="right">
        <v-card class="pa-2 ma-2">
          <v-card-title>
            Текущая заставка трансляции
          </v-card-title>
          <v-card-text>
            <canvas id="canvas"> </canvas>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row>
        <chat-component :socket="socket" :room-name="user.username"/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { io } from 'socket.io-client'
import ChatComponent from '@/components/chat/ChatComponent'
import { socket } from '@/socket'

export default {
  name: 'BroadcastingVideo',
  components: {
    ChatComponent
  },
  data() {
    return {
      time: 0,
      interval: null,
      canvas: document.getElementById("canvas"),
      photo: document.getElementById("photo"),
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
      this.socket = socket
      this.socket.emit('create room', {
        streamName: this.streamName,
        roomName: this.user.username,
      })

      this.socket.on('answer', (id, description) => {
        this.peerConnections[id].setRemoteDescription(description)
      })

      this.socket.on('stream info', data => {
        this.viewers = data.viewers
      })

      this.socket.on('join room', id => {
        const peerConnection = new RTCPeerConnection(this.config)
        this.peerConnections[id] = peerConnection
        let stream = this.videoElement.srcObject
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream))

        peerConnection.onicecandidate = event => {
          if (event.candidate) {
            this.socket.emit('icecandidate', id, event.candidate)
          }
        }

        peerConnection
          .createOffer()
          .then(sdp => peerConnection.setLocalDescription(sdp))
          .then(() => {
            this.socket.emit('offer', id, peerConnection.localDescription)
          })

      })

      this.socket.on('icecandidate', (id, candidate) => {
        this.peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
      })

      window.onunload = window.onbeforeunload = () => {
        this.viewers = 0
        this.socket.emit('end of stream', {
          streamName: this.streamName,
          roomName: this.user.username,
        })
        this.socket.close()
        this.peerConnection.close()
      }

      this.videoElement = document.querySelector("video");
      this.audioSelect = document.querySelector("select#audioSource");
      this.videoSelect = document.querySelector("select#videoSource");

      this.audioSelect.onchange = this.getStream
      this.videoSelect.onchange = this.getStream

      this.getStream()
        .then(this.getDevices)
        .then(this.gotDevices)

    },
    getDevices() {
      return navigator.mediaDevices.enumerateDevices();
    },
    gotDevices(deviceInfos) {
      window.deviceInfos = deviceInfos;
      for (const deviceInfo of deviceInfos) {
        const option = document.createElement("option");
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === "audioinput") {
          option.text = deviceInfo.label || `Microphone ${this.audioSelect.length + 1}`;
          this.audioSelect.appendChild(option);
        } else if (deviceInfo.kind === "videoinput") {
          option.text = deviceInfo.label || `Camera ${this.videoSelect.length + 1}`;
          this.videoSelect.appendChild(option);
        }
      }
    },
    getStream() {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
      const audioSource = this.audioSelect.value;
      const videoSource = this.videoSelect.value;
      const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
      };
      return navigator.mediaDevices
        .getUserMedia(constraints)
        .then(this.gotStream)
        .catch(this.handleError);
    },
    gotStream(stream) {
      window.stream = stream;
      this.audioSelect.selectedIndex = [...this.audioSelect.options].findIndex(
        option => option.text === stream.getAudioTracks()[0].label
      );
      this.videoSelect.selectedIndex = [...this.videoSelect.options].findIndex(
        option => option.text === stream.getVideoTracks()[0].label
      );
      this.videoElement.srcObject = stream;
      this.socket.emit("broadcaster");
    },
    takePicture() {
      const width = 300
      const height = 169
      this.canvas = document.getElementById("canvas")
      this.photo = document.getElementById("photo")
      const context = this.canvas.getContext("2d");
      if (width && height) {
        this.canvas.width = width;
        this.canvas.height = height;
        context.drawImage(this.videoElement, 0, 0, width, height);

        const data =this. canvas.toDataURL("image/png");
        // this.photo.setAttribute("src", data);
        this.socket.emit('set room preview', {
          roomName: this.user.username,
          image: data
        })
      }
    },
    handleError(error) {
      console.error("Error: ", error);
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
