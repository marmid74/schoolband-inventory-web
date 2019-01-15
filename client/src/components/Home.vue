<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Brasstory</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <bitems> </bitems>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Brasstory 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Bitems from './Bitems.vue'
// import EditBitems from './EditBitems.vue'
export default {
  name: 'Home-brasstory',
  components: {
    Bitems
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {

  },
  props: {
    source: String
  },
  mounted: function () {
    console.log('Is user logged in?', this.isLoggedIn)
    if (!this.isLoggedIn) {
      this.$router.push({path: '/login'})
    }
  }
}
</script>
