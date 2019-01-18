<template>
  <div>
      <v-card-text style="height: 100px; position: relative">
        <v-btn v-on:click="addNew"
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
      <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create new inventory item
        </v-card-title>
               <v-container id="dropdown-data" grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 sm4>
              <p>Uniform type</p>
              <v-overflow-btn
                :items="dropdown_types"
                label="Uniform type"
                v-model="item_type"
                target="#dropdown-data"
              ></v-overflow-btn>
            </v-flex>
            <v-flex xs12 sm4>
              <p>Model</p>
              <v-overflow-btn
                :items="dropdown_models"
                label="Model"
                v-model="model"
                target="#dropdown-data"
              ></v-overflow-btn>
            </v-flex>
            <v-flex xs12 sm4>
              <p>Size</p>
              <v-overflow-btn
                :items="dropdown_sizes"
                label="Size"
                v-model="size"
                target="#dropdown-data"
              ></v-overflow-btn>
            </v-flex>
            <v-flex xs12 sm4>
              <p>Quality</p>
              <v-overflow-btn
                :items="dropdown_qualities"
                label="Quality"
                v-model="quality"
                target="#dropdown-data"
              ></v-overflow-btn>
            </v-flex>
            <v-flex xs12 sm4>
              <p>Location</p>
              <v-overflow-btn
                :items="dropdown_locations"
                label="Loaction"
                v-model="location"
                target="#dropdown-data"
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

}
</script>

<style>

</style>
