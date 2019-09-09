<template>
  <v-container grid-list-lg>
    <v-layout align-start justify-start fill-height row>
      <!-- <v-parallax height="160" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-space-around fill-height>
        <h1 class="display-2 font-weight-thin mb-3">Stay Tuned!</h1>
        <h4 class="subheading">
          For now, Please
          <a href="SurbhiRautjiResume.pdf" target="_blank">click here</a> to download resume!
        </h4>
      </v-layout>
      </v-parallax>-->
      <v-flex xs12 sm4 md2>
        <introduction-component></introduction-component>
      </v-flex>
      <v-divider
      :vertical="divider.vertical"
      :dark="divider.dark"
      :inset="divider.inset">
      </v-divider>
      <v-flex xs-12 sm7 md9>
        <SectionTitleComponent :text="skills"></SectionTitleComponent>
        <v-layout row wrap>
          <v-flex
            lg3
            sm4
            xs12
            class="pa-1"
            v-for="tech in techSkills"
            :key="tech.key"
            v-show="tech.display"
          >
            <SkillsComponent :skills="tech" :s-img="tech.img"></SkillsComponent>
          </v-flex>
        </v-layout>
        <timeline></timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Component } from 'vue-property-decorator';
import ResumeData from '../data/resume.data';
import Constants from '../data/costants.data';
import IntroductionComponent from '../components/introduction.card.vue';
import SkillsComponent from '../components/skills.card.vue';
import SectionTitleComponent from '../components/SectionTitle.vue';
import timeline from '../components/timeline.vue';

export default {
  name: 'HomeComponent',
  components: {
    IntroductionComponent,
    SkillsComponent,
    SectionTitleComponent,
    timeline,
  },
  data: () => ({
    techSkills: ResumeData.technicalSkills(),
    skills: Constants.skills,
    divider: {
      inset: true,
      vertical: true,
      dark: true,
    },
  }),
};
</script>
