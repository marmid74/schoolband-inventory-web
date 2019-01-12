<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>{{ msg }}</h1>
        <h2>Brassband inventory items</h2>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn v-on:click="getData" color="primary">Get data</v-btn>
      </v-flex>
      <v-flex xs12>
        <h2>Results</h2>
        <v-table :data="dbResult">
          <thead slot="head">
            <th>Type</th>
            <th>Model</th>
            <th>Size</th>
            <th>Quality</th>
            <th>Location</th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.id">
              <td>{{ row.type }}</td>
              <td>{{ row.model }}</td>
              <td>{{ row.size }}</td>
              <td>{{ row.quality}}</td>
              <td>{{ row.location }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SearchResults',
  data () {
    return {
      msg: 'Welcome to Brasstory.js App'
    }
  },
  computed: {
    dbResult () {
      let temp = this.$store.getters.dbResult
      console.log('Computed: ', temp)
      return temp
      // return this.$store.getters.dbResult
    }
  },
  methods: {
    getData: function () {
      this.$store.dispatch('getData')
    }

  }

}
</script>

<style>

</style>
