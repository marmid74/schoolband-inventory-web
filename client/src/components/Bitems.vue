<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Brassband inventory items</h2>
        <v-text-field
          label="Search"
          v-model="email"
          v-bind:rules="emailRules"
          required>
        </v-text-field>
      </v-flex>
    </v-layout>
  </v-container>    
</template>

<script>
export default {

}
</script>

<style>

</style>
