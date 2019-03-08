<template>
  <div>
    <v-card style="width: 100%;">
      <v-flex xs12 sm6 offset-sm3>
        <v-btn @click="getData" color="primary">Get data</v-btn>
        <add-uniform
          :initialValue= "{}"
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
          <td>{{ row.item.uniform.itemtype }}</td>
          <td>{{ row.item.uniform.model }}</td>
          <td>{{ row.item.uniform.size }}</td>
          <td>{{ row.item.uniform.quality}}</td>
          <td>{{ row.item.location }}</td>
          <td class="justify-center layout  px-0 py-0">
            <update-uniform :key="tableKey"
              :initialValue="row.item"
               @update-value-by-child="updateParentValue"
            />
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import AddUniform from './AddUniform.vue'
import UpdateUniform from './UpdateUniform.vue'
// import { EventBus } from '../event-bus.js'
export default {
  name: 'BrasstoryItems',
  components: {
    AddUniform,
    UpdateUniform
  },
  data: () => ({
    msg: 'Welcome to Brasstory.js App',
    tableKey: 0,
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
      'nr': '',
      'assettype': 'uniform',
      'location': '',
      'uniform': {
        'itemtype': '',
        'model': '',
        'size': '',
        'quality': ''
      }
    },
    dialog: false
  }),
  beforeCreate () {
    console.log('Nothing gets called before me!, tablekey: ', this.tableKey)
  },
  created () {
    this.property = 'Example property update.'
    console.log('Uniform Hook created - propertyComputed will update, as this.property is now reactive.')
    this.$store.dispatch('getData')
    this.$store.dispatch('getConfigUniform')
  },
  computed: {
    dbResponse () {
      return this.$store.getters.dbResponse
    },
    propertyComputed () {
      console.log('I change when this.property changes.')
      return this.property
    }
  },
  methods: {
    getData: function () {
      console.log('getData is executed')
      this.$store.dispatch('getData')
      this.$store.dispatch('getConfigUniform')
    },
    updateParentValue (newValue) {
      this.valueEmit = newValue
      this.tableKey += 1
      console.log('table should be rendered tableKey: ', this.tableKey)
    }
  }
}

</script>

<style>

</style>
