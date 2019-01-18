<template>
  <v-card style="width: 100%;">
    <v-flex xs12 sm6 offset-sm3>
      <v-btn v-on:click="getData" color="primary">Get data</v-btn>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <h2>Results</h2>
    </v-flex>
    <v-data-table
      :headers="headers"
      :items="dbResponse"
    >
      <template slot="items" slot-scope="row">
        <td>{{ row.item.nr }}</td>
        <td>{{ row.item.type }}</td>
        <td>{{ row.item.model }}</td>
        <td>{{ row.item.size }}</td>
        <td>{{ row.item.quality}}</td>
        <td>{{ row.item.location }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
        </td>
      </template>
    </v-data-table>    
  </v-card>
</template>

<script>
export default {
  name: 'SearchResults',
  data: () => ({
    msg: 'Welcome to Brasstory.js App',
    dialog: false,
    headers: [
      {
        text: 'Item nr',
        align: 'left',
        sortable: false,
        value: 'nr'
      },
      {
        text: 'Type', value: 'type'
      },
      {
        text: 'Model', value: 'model'
      },
      {
        text: 'Size', value: 'size'
      },
      {
        text: 'Quality', value: 'quality'
      },
      {
        text: 'Loaction', value: 'location'
      }
    ],
    dropdown_types: ['Jacket', 'Trousers', 'Hat'],
    dropdown_models: ['Standard', 'Woman C', 'Woman D'],
    dropdown_sizes: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '36', '38', '40', '42'],
    dropdown_qualities: ['poor', 'average', 'good'],
    dropdown_locations: ['storage', 'cleaning', 'in use'],
    item_id: '',
    item_type: '',
    model: '',
    size: '',
    quality: '',
    location: '',
    payload: {}
  }),
  computed: {
    dbResponse () {
      let temp = this.$store.getters.dbResponse
      console.log('dbResonse: ', temp)
      return temp
      // return this.$store.getters.dbResult
    }
  },
  methods: {
    getData: function () {
      this.$store.dispatch('getData')
    },
    addNew: function () {
      console.log('Opend dialog box for create new item')
    },
    createNewItem: function () {
      this.payload = {
        nr: '',
        type: this.item_type,
        model: this.model,
        size: this.size,
        quality: this.quality,
        location: this.location
      }
      this.dialog = false
      console.log('Bitems.vue: Save item to db:', this.payload)
      this.$store.dispatch('createNewItem', this.payload)
    }
  }

}
</script>

<style>

</style>
