<template>
  <div class="updateItem">
      <!--v-card-text style="height: 100px; position: relative">
      </v-card-text -->
      <v-dialog v-model="dialog" width="800px">
        <v-icon
          small
          class="mr-2"
          slot="activator"
        >
          edit
        </v-icon>
        <v-card>
          <v-card-title
          class="grey lighten-4 py-4 title"
          >
          Update item
          </v-card-title>
          <v-container id="dropdown-data" grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 sm4>
                <p>Instrument type</p>
                <v-overflow-btn
                    :items="dropdown_types"
                    label="Instrument type"
                    target="#dropdown-data"
                    v-model="valueEmit.instrument.itemtype"
                ></v-overflow-btn>
              </v-flex>
              <v-flex xs12 sm4>
                <p>Brand</p>
                <v-overflow-btn
                    :items="dropdown_brands"
                    label="Model"
                    target="#dropdown-data"
                    v-model="valueEmit.instrument.brand"
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
                <v-flex xs12 sm4>
                  <p>Model</p>
                  <v-text-field
                    prepend-icon="model"
                    placeholder="Model"
                    v-model="valueEmit.instrument.model">
                  </v-text-field>
                </v-flex>

            </v-layout>
          </v-container>
            <v-card-actions>
              <v-btn flat color="primary">More</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
              <v-btn flat @click="updateItem">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { EventBus } from '../event-bus.js'

// EventBus.$on('i-got-clikced', parentdialog => {
// this.valueEmit = this.initialValue.valueEmit
// this.dialog = parentdialog
// this.updateItem()
// console.log('Update bitems. EventBus listning, parent dialog :', parentdialog)
// })

export default {
  name: 'UpdateBitems',
  data () {
    return {
      valueEmit: this.initialValue,
      dialog: false,
      dropdown_types: ['Percussion',
        'Alt Saxophone',
        'Tenor Saxophone',
        'Flute',
        'Piccolo',
        'F Horn',
        'Eb Horn',
        'Clarinet Eb',
        'Bass Clarinet',
        'Trumpet Bb',
        'Cornet Bb',
        'Cornet Eb',
        'Tenor Horn Bb',
        'Barytone Bb',
        'Bass Eb',
        'Trombone'],
      // dropdown_models: ['Standard', 'Woman C', 'Woman D'],
      dropdown_brands: ['B and S',
        'Bach',
        'Besson',
        'Conn',
        'Jupiter',
        'playLite',
        'pTrumpet',
        'Yamaha'],
      dropdown_qualities: ['Poor', 'Need Service', 'Average', 'Good'],
      dropdown_locations: ['Storage', 'At Service', 'In use']
    }
  },
  props: {
    initialValue: Object
  },
  computed: {
    dbConfig () {
      let config = []
      config = this.$store.getters.dbConfigUniform
      console.log('configUniform: ', config)
      return config
      // return this.$store.getters.dbResult
    }
  },
  methods: {
    updateItem (item) {
      this.dialog = false
      console.log('UpdateBitems: Update item to db:', this.valueEmit)
      this.$store.dispatch('updateItem', [this.valueEmit])
    }
  }
}
</script>

<style>

</style>
