<template>
<div>
  <SectionTitleComponent :text="Constants.experience"></SectionTitleComponent>
  <v-timeline>
    <v-timeline-item
      v-for="(experience, index) in timelineData.data"
      :key="index"
      :class="isOdd(index)"
    >
      <span class="subtitle-1">{{experience.startDate}} - {{experience.endDate}}</span>
      <p class="subtitle-2">{{experience.designation}}</p>
      <p class="subtitle-2">{{experience.companyName}}</p>
      <p class="body-1">{{experience.description}}</p>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
import ResumeData from '../data/resume.data';
import Constants from '../data/costants.data';
import SectionTitleComponent from './SectionTitle.vue';

export default {
  name: 'timelineComponent',
  components: {
    SectionTitleComponent,
  },
  data: () => ({
    timelineData: [],
    Constants,
  }),
  mounted() {
    this.timelineData = ResumeData.experience();
  },
  methods: {
    isOdd: index => (index % 2 === 0 ? 'text-xs-right' : 'text-xs-left'),
  },
};
</script>

<style>
</style>
