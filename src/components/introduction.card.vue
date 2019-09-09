<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-img src="img/surbhi.png" height="200px" contain></v-img>
    </v-flex>
    <v-flex xs12>
      <div class="headline text-xs-center">
        <p>
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
