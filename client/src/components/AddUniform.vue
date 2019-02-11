<template>
  <div class="addUniform">
      <v-card-text style="height: 100px; position: relative">
      </v-card-text>
      <v-dialog v-model="dialog" width="800px">
        <v-btn slot="activator">Add new</v-btn>
        <v-card>
          <v-card-title
          class="grey lighten-4 py-4 title"
          >
          Add new inventory item
          </v-card-title>
          <v-container id="dropdown-data" grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 sm4>
                <p>Uniform type</p>
                <v-overflow-btn
                    :items="dropdown_types"
                    label="Itemtype"
                    target="#dropdown-data"
                    v-model="valueEmit.uniform.itemtype"
                ></v-overflow-btn>
              </v-flex>
              <v-flex xs12 sm4>
                <p>Model</p>
                <v-overflow-btn
                    :items="dropdown_models"
                    label="Model"
                    target="#dropdown-data"
                    v-model="valueEmit.uniform.model"
                ></v-overflow-btn>
                </v-flex>
                <v-flex xs12 sm4>
                <p>Size</p>
                <v-overflow-btn
                    :items="dropdown_sizes"
                    label="Size"
                    target="#dropdown-data"
                    v-model="valueEmit.uniform.size"
                ></v-overflow-btn>
                </v-flex>
                <v-flex xs12 sm4>
                <p>Quality</p>
                <v-overflow-btn
                    :items="dropdown_qualities"
                    label="Quality"
                    target="#dropdown-data"
                    v-model="valueEmit.uniform.quality"
                ></v-overflow-btn>
                </v-flex>
                <v-flex xs12 sm4>
                <p>Location</p>
                <v-overflow-btn
                    :items="dropdown_locations"
                    label="Loaction"
                    target="#dropdown-data"
                    v-model="valueEmit.location"
                ></v-overflow-btn>
                </v-flex>
            </v-layout>
          </v-container>
            <v-card-actions>
              <v-btn flat color="primary">More</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
              <v-btn flat @click="addNewItem">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddUniform',
  data () {
    return {
      valueEmit: this.initialValue,
      dialog: false,
      // dropdown_types: this.ddType,
      dropdown_types: ['Jacket', 'Trousers', 'Hat'],
      dropdown_models: ['Standard', 'Woman C', 'Woman D'],
      dropdown_sizes: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '36', '38', '40', '42'],
      dropdown_qualities: ['poor', 'average', 'good'],
      dropdown_locations: ['storage', 'cleaning', 'in use']
    }
  },
  props: {
    initialValue: Object,
    ddType: Array
  },
  created () {
    this.$store.dispatch('getConfigUniform')
    this.configUniform = this.$store.getters.dbConfigUniform
    console.log('AddUniform Hook created - configPropertyObj: ', this.configUniform)
  },
  propertyComputed () {
    console.log('I change when this.property changes.')
    return this.property
  },
  computed: {
    dbUniformConfig () {
      let ddObj = {}
      let configObj = this.$store.getters.dbConfigUniform
      ddObj.model = configObj[0].itemtypes.itemtype.model
      console.log('MODEL', ddObj.model)
      return true
      // return this.$store.getters.dbResult
    }
  },
  methods: {
    populateDropDown: function () {
      let items = this.$store.getters.dbConfigUniform[0].itemtypes
      let modellist = []
      for (let item = 0; item < items.length; item++) {
        console.log('Value: ', items)
        modellist.push(items[item].itemtype.name)
      }
      this.ddType = modellist
      console.log('AddUniform method populateDropDown: ', this.ddType)
      return this.ddType
    },
    addNewItem: function () {
      console.log('AddUniform.vue: addNewItem', this.valueEmit)
      this.dialog = false
      this.$store.dispatch('addNewItem', this.valueEmit)
      this.valueEmit = '{"assettype": "uniform"}'
    }
  }

}
</script>

<style>

</style>
