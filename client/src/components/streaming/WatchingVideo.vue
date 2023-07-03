<template>
  <v-row>
    <v-col cols="9">
      <v-card>
        <v-card-title>
          Просмотр трансляции
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <video playsinline autoplay muted id="video"></video>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-icon color="#F44336" v-if="started">
                mdi-play
              </v-icon>
              <v-icon v-else>
                mdi-play-pause
              </v-icon>
              {{streamName}}
            </v-col>
            <v-col cols="4" v-if="started">
              Длительность трансляции: {{("0" + (time/3600>>0)).slice(-2)
              }}:{{("0" + (time/60>>0)).slice(-2)
              }}:{{("0" + Number(((time/60-(time/60>>0))*60).toFixed(0))).slice(-2)}}
            </v-col>
            <v-col cols="4" v-if="!started">

            </v-col>
            <v-col cols="4">
              <v-icon color="#F44336">mdi-account-outline</v-icon>
              <span class="red--text">{{viewers}}</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <!--          <button id="enable-audio">Enable audio</button>-->
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
      <chat-component :socket="socket" :room-name="roomName"/>
    </v-col>
  </v-row>
</template>

<script>
import ChatComponent from '@/components/chat/ChatComponent'
import { socket } from '@/socket'

export default {
  name: 'WatchingVideo',
  components: {ChatComponent},
  data() {
    return {
      started: false,
      viewers: 0,
      time: 0,
      streamName: null,
      peerConnection: null,
      config: {
        iceServers: [
          {
            "urls": "stun:stun.l.google.com:19302",
          },
        ]
      },
      socket: socket,
      video: document.querySelector("video"),
      // enableAudioButton: null,
    }
  },
  computed: {
    roomName() {
      return this.$route.params.username
    },
    user() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    console.log('join room')
    this.video = document.querySelector("video")

    this.socket.emit('join room', {roomName: this.roomName, user: this.user})

    this.socket.on('stream info', data => {
      this.viewers = data.viewers
      this.streamName = data.streamName
    })
    this.started = true

    this.socket.on('end of stream', () => {
      this.started = false
      this.$router.push('/')
    })

    this.socket.on('offer', (id, description) => {
      this.peerConnection = new RTCPeerConnection(this.config)
      this.peerConnection
        .setRemoteDescription(description)
        .then(() => this.peerConnection.createAnswer())
        .then(sdp => this.peerConnection.setLocalDescription(sdp))
        .then(() => {
          this.socket.emit('answer', id, this.peerConnection.localDescription)
        })
      this.peerConnection.ontrack = event => {
        this.started = true
        this.toggleTimer()
        this.video.srcObject = event.streams[0]
      }
      this.peerConnection.onicecandidate = event => {
        if (event.candidate) {
          this.socket.emit('icecandidate', id, event.candidate)
        }
      }
    })

    this.socket.on('icecandidate', (id, candidate) => {
      this.peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    })

    window.onunload = window.onbeforeunload = () => {
      this.socket.emit('left room', {roomName: this.roomName, user: this.user})
      this.socket.close();
      this.peerConnection.close();
    };

  },
  methods: {
    toggleTimer() {
      if (!this.started) {
        clearInterval(this.interval);
        console.log('timer stops');
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning
    },
    incrementTime() {
      this.time = parseInt(this.time) + 1;
    },
  }
}
</script>

<style scoped>
#video{
  width:100%;
  height:100%;
}
</style>
