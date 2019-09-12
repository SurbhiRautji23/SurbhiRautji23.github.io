<template>
<v-card class="py-5" color="lightblue" >
  <v-layout row wrap fill-height>
    <v-flex xs12  class="text-xs-center">
      <v-avatar :size="160">
        <img src="img/surbhi.png"/>
      </v-avatar>
    </v-flex>
    <v-flex xs12>
      <div class="text-xs-center">
        <p>Surbhi Rautji</p>
        <p class="title">
        Software Engineer with Expertise in QA and Automation Engineering
        </p>
        <v-divider :inset="divider.inset"></v-divider>
        <h4 class="headline font-weight-black">Education</h4>
        <div v-for="education in educationInfo.data" :key="education.startDate" class="py-2">
          <div class="title">{{education.school}}</div>
          <div class="subheading font-weight-medium">{{education.degree}}, {{education.major}}</div>
          <div class="body-2">{{education.startDate}} - {{education.endDate}}</div>
        </div>
      </div>

    </v-flex>
  </v-layout>
  </v-card>
</template>

<script>
import ResumeData from '../data/resume.data';

export default {
  name: 'IntroCardComponent',
  data: () => ({
    AboutInfo: ResumeData.summaryInfo,
    educationInfo: ResumeData.educationDetails(),
    divider: {
      inset: false,
    },
  }),
};
</script>

<style>
</style>
