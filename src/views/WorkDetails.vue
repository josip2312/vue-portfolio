<template>
	<section id="work-details">
		<div class="details container">
			<div class="heading-2">Work</div>
			<div class="projects">
				<div class="projects">
					<ProjectSingle
						v-for="(project, index) in projects"
						:key="index"
						:project="project"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { allProjects } from "@/data/projects";

import ProjectSingle from "@/components/layout/ProjectSingle";
export default {
	name: "WorkDetails",
	metaInfo: {
		title: "Josip Ivancic",
		titleTemplate: "%s | Projects",
	},
	components: {
		ProjectSingle,
	},
	data() {
		return {
			projects: allProjects,
		};
	},
};
</script>

<style lang="scss" scoped>
#work-details {
	background-color: var(--primary);
	padding: 15rem 0;
	min-height: 100vh;
}
.details {
	display: flex;
	flex-direction: column;
}
.heading-2 {
	margin-bottom: 10rem;
}
.projects {
	& > *:not(:last-child) {
		margin-bottom: 15rem;
	}
}
</style>
