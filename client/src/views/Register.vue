<template>
  <v-container>
    <v-row align="stretch">
      <v-col align="center" cols="auto">
        <v-card>
          <v-card-title>
            Регистрация
          </v-card-title>
          <v-card-text>
            <v-form name="form" @submit.prevent="handleRegister">

              <v-text-field
                v-model="user.username"
                label="Имя пользователя"
                :rules="usernameRules"
              ></v-text-field>

              <v-text-field
                v-model="user.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Пароль"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-text-field
                v-model="repeatPassword"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[matchingPasswords]"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                label="Повторите пароль"
                hint="At least 8 characters"
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>

              <v-text-field
                v-model="user.firstname"
                label="Имя"
                :rules="firstnameRules"
              ></v-text-field>

              <v-text-field
                v-model="user.lastname"
                label="Фамилия"
                :rules="lastnameRules"
              ></v-text-field>

              <v-btn type="submit" block class="mt-2">Зарегистрироваться</v-btn>
              <v-divider></v-divider>
              Уже зарегистрированы?
              <router-link to="/login">Войти</router-link>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from '../models/user'

export default {
  name: 'Login',
  data: () => ({
    user: new User('', '', '', ''),
    show1: false,
    show2: false,
    repeatPassword: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    firstnameRules: [
      value => {
        if (value?.length > 3) return true
        return 'Имя должно содержать минимум 3 символа.'
      },
    ],
    lastnameRules: [
      value => {
        if (value?.length > 3) return true
        return 'Фамилия должна содержать минимум 3 символа.'
      },
    ],
    usernameRules: [
      value => {
        if (value?.length > 3) return true
        return 'Имя пользователя должно содержать минимум 3 символа.'
      },
    ],
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },

  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$store.dispatch('auth/register', this.user).then(
        data => {
          this.message = data.message;
          this.successful = true;
          this.$router.push('/login')
        },
        error => {
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
    matchingPasswords: function() {
      if (this.user.password === this.repeatPassword) {
        return true;
      } else {
        return 'Пароли не совпадают.';
      }
    },
  }
}
</script>
