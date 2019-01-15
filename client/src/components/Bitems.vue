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
      <v-flex xs12 sm6 offset-sm3>
        <h2>Results</h2>
        <v-table :data="dbResult">
          <thead slot="head">
            <th>Type</th>
            <th>Model</th>
            <th>Id nr</th>
            <th>Size</th>
            <th>Quality</th>
            <th>Location</th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="row in displayData" :key="row.id">
              <td>{{ row.type }}</td>
              <td>{{ row.model }}</td>
              <td>{{ row.id }}</td>
              <td>{{ row.size }}</td>
              <td>{{ row.quality}}</td>
              <td>{{ row.location }}</td>
            </tr>
          </tbody>
        </v-table>
        <v-card-text style="height: 100px; position: relative">
          <v-btn v-on:click="addData"
            absolute
            dark
            fab
            top
            right
            color="pink"
            @click= "dialog = !dialog"
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create new inventory item
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs6 align-center justify-space-between>
              <p >Uniform type</p>
                <v-overflow-btn
                  :items="dropdown_types"
                  label="Uniform type"
                  v-model="item_type"
                  target="#dropdown-example"
                ></v-overflow-btn>
            </v-flex>
            <v-flex xs6 align-right>
              <p>Model</p>
                <v-overflow-btn
                  :items="dropdown_models"
                  label="Model"
                  v-model="model"
                ></v-overflow-btn>
            </v-flex>
          </v-layout>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="storeData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'SearchResults',
  data: () => ({
    msg: 'Welcome to Brasstory.js App',
    dialog: false,
    dropdown_types: ['Jacket', 'Trousers', 'Hat'],
    dropdown_models: ['Standard', 'Woman C', 'Woman D'],
    dropdown_sizes: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '36', '38', '40', '42'],
    dropdown_qualities: ['poor', 'average', 'good'],
    item_type: '',
    model: '',
    size: '',
    quality: '',
    location: ''
  }),
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
    },
    addData: function () {
      console.log('Save item to db')
    },
    storeData: function () {
      const payload = {
        item_type: this.item_type,
        model: this.model,
        size: this.size,
        quality: this.quality,
        location: this.location
      }
      console.log('Save item to db:', payload)
    }
  }

}
</script>

<style>

</style>
