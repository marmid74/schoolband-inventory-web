<template>
  <div class="editItem">
      <v-card-text style="height: 100px; position: relative">
      </v-card-text>
      <v-dialog v-model="dialog" width="800px">
        <v-btn slot="activator">Add new</v-btn>
        <v-card>
          <v-card-title
          class="grey lighten-4 py-4 title"
          >
          Create new inventory item
          </v-card-title>
          <v-container id="dropdown-data" grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex>
                <p> Intial Value </p>
                {{initialValue}}
                <p> Child value </p>
                {{valueEmit}}
              </v-flex>
              <v-flex xs12 sm4>
                <p>Uniform type</p>
                <v-overflow-btn
                    :items="dropdown_types"
                    label="Uniform type"
                    target="#dropdown-data"
                    v-model="valueEmit.type"
                ></v-overflow-btn>
              </v-flex>
              <v-flex xs12 sm4>
                <p>Model</p>
                <v-overflow-btn
                    :items="dropdown_models"
                    label="Model"
                    target="#dropdown-data"
                    v-model="valueEmit.model"
                ></v-overflow-btn>
                </v-flex>
                <v-flex xs12 sm4>
                <p>Size</p>
                <v-overflow-btn
                    :items="dropdown_sizes"
                    label="Size"
                    target="#dropdown-data"
                    v-model="valueEmit.size"
                ></v-overflow-btn>
                </v-flex>
                <v-flex xs12 sm4>
                <p>Quality</p>
                <v-overflow-btn
                    :items="dropdown_qualities"
                    label="Quality"
                    target="#dropdown-data"
                    v-model="valueEmit.quality"
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
              <v-btn flat @click="createNewItem">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'EditBitems',
  data () {
    return {
      valueEmit: this.initialValue,
      dialog: false,
      dropdown_types: ['Jacket', 'Trousers', 'Hat'],
      dropdown_models: ['Standard', 'Woman C', 'Woman D'],
      dropdown_sizes: ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '36', '38', '40', '42'],
      dropdown_qualities: ['poor', 'average', 'good'],
      dropdown_locations: ['storage', 'cleaning', 'in use']
    }
  },
  props: {
    initialValue: Object
  },
  computed: {
    dbResponse () {
      let temp = this.$store.getters.dbResponse
      console.log('dbResonse: ', temp)
      return temp
      // return this.$store.getters.dbResult
    }
  },
  created: function () {
    console.log('EditItems received object: ', this.initialValue)
    console.log('EditItems stored object: ', this.valueEmit)
  },
  methods: {
    createNewItem: function () {
      console.log('EditBitems.vue: createNewItem', this.valueEmit)
      this.dialog = false
      this.$store.dispatch('createNewItem', this.valueEmit)
    },
    updateItem (item) {
      console.log('Bitems.vue: Update item to db:', this.valueEmit)
      this.$store.dispatch('updateItem', [this.valueEmit])
    }
  }

}
</script>

<style>

</style>
