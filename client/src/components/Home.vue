<template>
  <v-app>
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
    <v-toolbar color="indigo" dark fixed app tabs>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Brasstory</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>queue_music</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="indigo"
        grow
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="tb in tabs"
          :key="tb.name"
          @click.prevent="setActiveTabname(tb.name)"
        >
          {{ tb.name }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <div v-if="displayContents('uniforms')">
          <bitems> </bitems>
        </div>
        <div v-if="displayContents('instruments')">
          <instruments> </instruments>
        </div>
        <div v-if="displayContents('scores')">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Brasstory 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Bitems from './Bitems.vue'
import Instruments from './Instruments.vue'
export default {
  name: 'Home-brasstory',
  components: {
    Bitems,
    Instruments
  },
  data: () => ({
    drawer: null,
    tabs: [
      {
        name: 'uniforms',
        displayName: 'Uniforms'
      },
      {
        name: 'instruments',
        displayName: 'Instruments'
      },
      {
        name: 'scores',
        displayName: 'Scores'
      }
    ],
    activeTabName: null,
    text: 'Nothing implemented for this tab '
  }),
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    setActiveTabname (name) {
      this.activeTabName = name
      console.log('ActiveTab is ' + this.activeTabName)
    },
    displayContents (name) {
      console.log('DisplayContents was called. Active tab is: ' + this.activeTabName + ', given input is: ' + name)
      return this.activeTabName === name
    }

  },
  props: {
    source: String
  },
  beforeMount () {
    console.log('Hook - beforeMount: this app doesnt exist yet, but it will soon!')
  },
  mounted: function () {
    console.log('Hook - mounted: Is user logged in?', this.isLoggedIn)
    if (!this.isLoggedIn) {
      this.$router.push({path: '/login'})
    }
    this.activeTabName = this.tabs[0].name
  }
}
</script>
