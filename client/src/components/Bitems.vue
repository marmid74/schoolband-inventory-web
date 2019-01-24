<template>
  <div>
    <v-card style="width: 100%;">
      <v-flex xs12 sm6 offset-sm3>
        <v-btn @click="getData" color="primary">Get data</v-btn>
        <edit-bitems
          :initialValue="valueEmit"
          @update-value-by-child="updateParentValue"
        />
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
    valueEmit: {
      nr: '',
      type: '',
      model: '',
      size: '',
      quality: '',
      location: ''
    }
  }),
  computed: {
    dbResponse () {
      let temp = []
      temp = this.$store.getters.dbResponse
      console.log('dbResonse: ', temp)
      return temp
      // return this.$store.getters.dbResult
    }
  },
  methods: {
    addNew: function () {
      console.log('Bitem AddNew object: ', this.valueEmit)
    },
    getData: function () {
      this.$store.dispatch('getData')
    },
    updateItem (item) {
      console.log('Bitem. update item._id: ', item._id)
      this.valueEmit = {
        _id: item._id,
        nr: item.nr,
        type: item.type,
        model: item.model,
        size: item.size,
        quality: item.quality,
        location: item.location,
        update: true
      }
      console.log('Bitem. send this to EditItems: ', this.valueEmit)
      this.openDialog = true
    },
    updateParentValue (newValue) {
      console.log('new value', newValue)
      this.valueEmit = newValue
    }
  }
}
</script>

<style>

</style>
