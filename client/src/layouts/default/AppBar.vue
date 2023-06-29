<template>
  <v-col>
    <v-navigation-drawer
      expand-on-hover
      rail
      v-if="loggedIn"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/73.jpg"
          :title="user.firstname + ' ' + user.lastname"
          :subtitle="user.username"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav v-for="page in pages">

        <v-list-item :prepend-icon="page.icon" :title="page.title" :value="page.to" :to="page.to"></v-list-item>

      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      density="compact"
    >

      <v-app-bar-title>watch and stream</v-app-bar-title>

      <template v-slot:append v-if="loggedIn">
        {{user.username}}
        <v-btn @click="logout()">
          Выйти
          <v-icon>
            mdi-logout
          </v-icon>
        </v-btn>
      </template>

      <template v-slot:append v-else>
        <v-btn @click="login()">
          Войти
          <v-icon>
            mdi-login
          </v-icon>
        </v-btn>
      </template>

    </v-app-bar>
  </v-col>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import router from '@/router'

export default {
  data() {
    return {
      store : useStore(),
      drawer : false,
      pages : [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Профиль',
          to: '/profile'
        },
        {
          icon: 'mdi-video-wireless-outline',
          title: 'Трансляция',
          to: '/broadcaster'
        },
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(
        () => {
          console.log('login')
          router.push('/login');
        })
    },
    login() {
      this.$router.push('login')
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$store.dispatch('auth/setProfileData')
    }
  },

}
</script>
