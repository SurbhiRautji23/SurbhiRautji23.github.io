<template>
<!-- eslint-disable -->
	<div>
		<v-card
			class="mx-auto"
      :flat="flat"
			:loading="loading"
			:outlined="outlined"
			:elevation="elevation"
			:raised="raised"
			:height="height"
		>
      <v-card-title class="title align-end fill-height" :class="getRandomColor()" >{{ skills.key }}</v-card-title>
			<!-- <v-card-title class="headline" primary-title>{{ skills.key }}</v-card-title> -->

			<v-card-text color="secondary">
				<v-chip class="caption" v-for="skill in skills.data" v-bind:key="skill.name">
          <v-avatar>
					  <v-progress-circular :value="getValue(skill)" :color="getColor(skill)" :size="16"></v-progress-circular>
          </v-avatar>
					{{ skill.name }}
				</v-chip>
			</v-card-text>
		</v-card>
		<v-divider :vertical="vertical" light></v-divider>
	</div>
</template>

<script>
import { proficiency } from '../data/resume.data';

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
    flat: true,
    media: true,
    loading: false,
    actions: true,
    outlined: true,
    elevation: undefined,
    raised: false,
    height: undefined,
    vertical: true,
  }),
  methods: {
    getValue: skill => skill.proficiency,
    getColor: (skill) => {
      let color = 'black';
      switch (skill.proficiency) {
        case proficiency.expert:
          color = 'success';
          break;
        case proficiency.high:
          color = 'blue';
          break;
        case proficiency.proficient:
          color = 'orange';
          break;
        case proficiency.low:
          color = 'magenta';
          break;
        default:
          color = black;
      }
      return color;
    },
    getRandomColor: () => {
      const colors = ['primary', 'secondary', 'info', 'warning', 'yellow', 'purple', 'brown'];
      return colors[Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)];
    },
  },

};
</script>

<style>
</style>
