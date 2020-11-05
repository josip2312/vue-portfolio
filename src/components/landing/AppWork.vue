<template>
	<div class="work container">
		<h2 class="heading-2" v-scrollanimation>
			Work
		</h2>

		<div class="projects">
			<ProjectSingle
				v-for="(project, index) in projects"
				:key="index"
				:project="project"
			/>
		</div>
		<router-link :to="{ name: 'WorkDetails' }" class="btn" tag="button">
			See more projects
		</router-link>
	</div>
</template>

<script>
import ProjectSingle from '@/components/layout/ProjectSingle';

export default {
	name: 'Work',
	components: {
		ProjectSingle,
	},
	data() {
		return {
			projects: [
				{
					title: 'StudentRides',
					paragraphOne:
						'Project made for the final assignment on my university.',
					paragraphTwo:
						'A carpooling application built using the MEVN stack, MongoDB, Express, Vue  and Node.js',
					imgSrc: require('@/assets/images/studentrides.png'),
					link: 'https://studentrides.tk/',
					class: 'project-one',
				},
				{
					title: 'Hunting agency site',
					paragraphOne:
						'Site for a local hunting agency still in progress.',
					paragraphTwo:
						'A simple landing website built with Vue, uses prerendering and lazy-loading images.',
					imgSrc: require('@/assets/images/sljuka.png'),
					link: 'https://suspicious-bardeen-eb4d7a.netlify.app',
					class: 'project-two',
				},
				{
					title: 'MoStan',
					paragraphOne:
						'Apartment reservations website for a university project.',
					paragraphTwo:
						'A simple website using HTML, SASS and Vanilla JavaScript on the frontend and PHP on the backend.',
					imgSrc: require('@/assets/images/mostan.png'),
					link: 'http://studenti.sum.ba:82/2019/g13/views/',

					class: 'project-three',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.heading-2.enter {
	animation: up 0.8s ease-in-out forwards;
}

.work {
	display: flex;
	flex-direction: column;

	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
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
