<template>
  <div>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-img v-if="media" class="white--text" height="200px" :src="SImg">
        <!-- <v-card-title class="align-end fill-height">{{ skills.key }}</v-card-title> -->
      </v-img>
      <v-card-title class="headline mb-1">{{ skills.key }}</v-card-title>

      <v-card-text>
        <v-chip v-for="skill in skills.data" v-bind:key="skill">{{ skill }}</v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SkillsComponent',
  props: {
    skills: {
      type: Object,
      required: true,
    },
    SImg: {
      type: String,
      required: false,
      default: 'img/artificial-intelligence-blur-close-up-546819.jpg',
    },
  },
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: false,
    width: 344,
    height: undefined,
  }),
};
</script>

<style>
</style>
