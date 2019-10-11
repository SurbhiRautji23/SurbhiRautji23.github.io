<template>
  <v-toolbar dark color="primary" app>
    <!-- <v-img
    :src="src" aspect-ratio="1" height="`20`" width="`20`" class="grey lighten-2"></v-img>-->
    <!-- <v-toolbar-title class="headline text-uppercase">
      <span>SURBHI RAUTJI</span>
    </v-toolbar-title>-->
    <v-toolbar-title text-center>
      <span class="font-weight-light">About Me</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title text-center>
      <span class="font-weight-light">@ surbhi.spartan90@gmail.com</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat href="Rautji_Surbhi.pdf" target="_blank">
        <span class="mr-2">Resume</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    src: '../../assets/img/sr-logo.png',
  }),
};
</script>

<style>
</style>
