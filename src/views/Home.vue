<template>
  <div>
    <v-parallax height="160" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-space-around fill-height>
        <h1 class="display-2 font-weight-thin mb-3">Stay Tuned!</h1>
        <h4 class="subheading">
          For now, Please
          <a href="./SurbhiRautjiResume.pdf" target="_blank">click here</a> to download resume!
        </h4>
      </v-layout>
    </v-parallax>
    <v-container>
      <SectionTitleComponent :text="skills"></SectionTitleComponent>
      <v-layout row justify-space-between align-start fill-height>
        <v-flex v-for="tech in techSkills" v-bind:key="tech" md3 sm4 xs v-show="tech.display">
          <SkillsComponent :skills="tech" :s-img="tech.img"></SkillsComponent>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Component } from 'vue-property-decorator';
import ResumeData from '../data/resume.data';
import Constants from '../data/costants.data';
import SkillsComponent from '../components/skills.card.vue';
import SectionTitleComponent from '../components/SectionTitle.vue';

export default {
  name: 'HomeComponent',
  components: {
    SkillsComponent,
    SectionTitleComponent,
  },
  data: () => ({
    techSkills: ResumeData.technicalSkills(),
    skills: Constants.skills,
  }),
};
</script>

<style>
</style>
