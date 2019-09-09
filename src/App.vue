<template>
  <v-app>
    <header-component></header-component>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import HeaderComponent from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    Home,
  },
  data() {
    return {
      //
    };
  },
};
</script>
