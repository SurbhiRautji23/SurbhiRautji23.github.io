<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SURBHI RAUTJI</span>
      </v-toolbar-title>
      <v-toolbar-title text-center>
        <span class="font-weight-light">About Me</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>-->
    </v-toolbar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      //
    };
  },
};
</script>
