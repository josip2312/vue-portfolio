<template>
	<section id="work-details">
		<div class="details">
			<div class="projects">
				<div class="projects">
					<ProjectSingle
						v-for="(project, index) in projects"
						:key="index"
						:project="project"
					/>
				</div>
			</div>
			<div class="projects-2">
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
import ProjectSingle from '@/components/layout/ProjectSingle';
export default {
	name: 'WorkDetails',
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
					imgSrc: require('@/assets/images/studentrides.jpg'),
					link: 'https://studentrides.tk/',
					class: 'project-one',
				},
				{
					title: 'Hunting agency site',
					paragraphOne:
						'Site for a local hunting agency still in progress.',
					paragraphTwo:
						'A simple landing website built with Vue, uses prerendering and lazy-loading images.',
					imgSrc: require('@/assets/images/sljuka.jpg'),
					link: 'https://suspicious-bardeen-eb4d7a.netlify.app',
					class: 'project-two not-reverse',
				},
				{
					title: 'MoStan',
					paragraphOne:
						'Apartment reservations website for a university project.',
					paragraphTwo:
						'A simple website using HTML, SASS and Vanilla JavaScript on the frontend and PHP on the backend.',
					imgSrc: require('@/assets/images/mostan.jpg'),
					link: 'http://studenti.sum.ba:82/2019/g13/views/',
					class: 'project-three',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
#work-details {
	background-color: var(--secondary);
	padding: 7.5rem 0;
	min-height: 91vh;
}
.details {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;

	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}
.projects {
	& > * {
		margin-bottom: 10rem;
	}
}
.projects-2 {
	& > *:not(:last-child) {
		margin-bottom: 10rem;
	}
}
</style>
