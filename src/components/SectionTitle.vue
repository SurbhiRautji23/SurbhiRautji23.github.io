<template>
  <v-layout row fill-height justify-center align-center class="mb-2">
    <v-flex>
      <h4 class="display-1 text-capitalize text-xs-center">{{ text }}</h4>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SectionTitleComponent',
  props: {
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
</style>
