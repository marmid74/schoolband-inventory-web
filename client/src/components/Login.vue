<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Login</h2>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="E-mail"
          v-model="email"
          v-bind:rules="emailRules"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="Password"
          v-model="password"
          v-bind:rules="passwordRules"
          v-bind:type="'password'"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn v-on:click="cancel">Cancel</v-btn>
        <v-btn v-on:click="login" color="primary">Login</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="6000"
      :top="true"
      v-model="showAlert"
    >
      {{ loginError }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      message: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    loginError () {
      return this.$store.getters.loginError
    }
  },
  methods: {
    login: function () {
      const vm = this
      // code example using Vuex store
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('logInUser', payload)
        .then(() => {
          if (vm.isLoggedIn) {
            console.log('Login successfull, redirect to Home')
            this.$router.push({ path: '/' })
          } else {
            vm.showAlert = true
          }
        })
      //  code example local state
      // if (vm.password === 'test111') {
      //   this.$router.push({ path: '/'})
      // } else {
      //   //  show alert to user
      //   vm.showAlert = true
      //   vm.message = 'email or password is invalid'
      // }
    },
    cancel: function () {
      console.log('The user does not want to log in')
    }
  }
}
</script>

<style>

</style>
