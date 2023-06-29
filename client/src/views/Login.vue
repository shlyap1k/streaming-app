<template>
  <v-container>
    <v-card>
      <v-card-title>
        Авторизация
      </v-card-title>
      <v-card-text>
        <v-form name="form" @submit.prevent="handleLogin">
          <v-text-field
            v-model="user.username"
            label="Имя пользователя"
            :rules="usernameRules"
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Пароль"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn type="submit" block class="mt-2">Войти</v-btn>

        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import User from '../models/user'
export default {
  name: 'Login',
  data() {
    return {
      user: new User('', '', '', ''),
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      usernameRules: [
        value => {
          if (value?.length > 3) return true
          return 'Имя пользователя должно содержать минимум 3 символа.'
        },
      ],
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$store.dispatch('auth/setProfileData')
            this.$router.push('/profile');
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      }
    }
  }
}
</script>
