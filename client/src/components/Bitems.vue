<template>
  <div>
    <edit-bitems v-if="addNewItem"></edit-bitems>
    <v-card style="width: 100%;">
      <v-flex xs12 sm6 offset-sm3>
        <v-btn @click="getData" color="primary">Get data</v-btn>
        <v-btn @click="addNewItem = !addNewItem">Add new</v-btn>
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
              @click="updateItem(row.item)"
            >
              edit
            </v-icon>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import EditBitems from './EditBitems.vue'
export default {
  name: 'BrasstoryItems',
  components: {
    EditBitems
  },
  data: () => ({
    msg: 'Welcome to Brasstory.js App',
    headers: [
      {
        text: 'Item nr',
        align: 'center',
        sortable: true,
        value: 'nr'
      },
      {
        text: 'Type', align: 'center', value: 'type'
      },
      {
        text: 'Model', align: 'center', value: 'model'
      },
      {
        text: 'Size', align: 'center', value: 'size'
      },
      {
        text: 'Quality', align: 'center', value: 'quality'
      },
      {
        text: 'Loaction', align: 'center', value: 'location'
      }
    ],
    item_id: '',
    item_type: '',
    model: '',
    size: '',
    quality: '',
    location: '',
    payload: {},
    addNewItem: false
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
    activateNew: function () {
      this.dialog = true
      console.log('Bitem: Opend dialog box for create new item', this.dialog)
    },
    updateItem (item) {
      console.log('update item._id: ', item._id)
      this.payload = {
        id: item._id,
        nr: item.nr,
        type: item.type,
        model: item.model,
        size: item.size,
        quality: item.quality,
        location: item.location
      }
      console.log('Bitems.vue: Update item to db:', this.payload)
      this.$store.dispatch('updateItem', [this.payload])
    }
  }

}
</script>

<style>

</style>
