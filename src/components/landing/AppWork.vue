<template>
	<div class="work container">
		<h2 class="heading-2" data-aos="fade">Work</h2>

		<div class="projects">
			<ProjectSingle
				v-for="(project, index) in projects"
				:key="index"
				:project="project"
			/>
		</div>
		<router-link
			:to="{ name: 'WorkDetails' }"
			class="btn btn-main"
			tag="button"
		>
			See more projects
		</router-link>
	</div>
</template>

<script>
import { projectsShowcase } from "@/data/projects";

import ProjectSingle from "@/components/layout/ProjectSingle";

export default {
	name: "Work",
	components: {
		ProjectSingle,
	},
	data() {
		return {
			projects: projectsShowcase,
		};
	},
};
</script>

<style lang="scss" scoped>
.work {
	display: flex;
	flex-direction: column;
}

.projects {
	padding-top: 10rem;
	padding-bottom: 5rem;

	& > *:not(:last-child) {
		margin-bottom: 15rem;
	}
}

.btn {
	margin-top: 5rem;
	align-self: center;
	width: 85%;
	max-width: 27.5rem;
}
</style>
