<template>
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
			<v-img v-if="media" class="white--text" height="120px" :src="SImg">
				<!-- <v-card-title class="align-end fill-height">{{ skills.key }}</v-card-title> -->
			</v-img>
			<v-card-title class="headline" primary-title>{{ skills.key }}</v-card-title>

			<v-card-text color="secondary">
				<v-chip class="caption" v-for="skill in skills.data" v-bind:key="skill">
					{{ skill }}
					<v-spacer px1></v-spacer>
					<v-progress-circular :value="getValue(skill)" :color="getColor(skill)" :size="16"></v-progress-circular>
				</v-chip>
			</v-card-text>
		</v-card>
		<v-divider :vertical="vertical" light></v-divider>
	</div>
</template>

<script>
import { proficiency } from "../data/resume.data";

export default {
	name: "SkillsComponent",
	props: {
		skills: {
			type: Object,
			required: true
		},
		SImg: {
			type: String,
			required: false,
			default: "img/artificial-intelligence-blur-close-up-546819.jpg"
		}
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
		vertical: true
	}),
	methods: {
		getValue: skill => skill.proficiency,
		getColor: skill => {
			let color = "black";
			switch (skill.proficiency) {
				case proficiency.expert:
					color = "success";
					break;
				case proficiency.high:
					color = "blue";
					break;
				case proficiency.proficient:
					color = "orange";
					break;
				case proficiency.low:
					color = "magenta";
					break;
				default:
					color = black;
			}
			return color;
		}
	}
};
</script>

<style>
</style>
