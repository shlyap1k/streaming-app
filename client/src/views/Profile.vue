<template>
  <v-container>
    <v-card>
      <v-card-title>
        Профиль пользователя
      </v-card-title>
      <v-card-title>
        {{user}}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
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
