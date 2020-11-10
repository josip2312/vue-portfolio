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
import ProjectSingle from "@/components/layout/ProjectSingle";
export default {
	name: "WorkDetails",
	components: {
		ProjectSingle,
	},
	data() {
		return {
			projects: [
				{
					title: "StudentRides",
					paragraphOne:
						"Project made for the final assignment on my university.",
					paragraphTwo:
						"A carpooling application built using the MEVN stack, MongoDB, Express, Vue  and Node.js",
					imgSrc: require("@/assets/images/studentrides.png"),
					link: "https://studentrides.tk/",
					class: "project-one",
				},
				{
					title: "Hunting agency site",
					paragraphOne:
						"Site for a local hunting agency still in progress.",
					paragraphTwo:
						"A simple landing website built with Vue, uses prerendering and lazy-loading images.",
					imgSrc: require("@/assets/images/sljuka.png"),
					link: "https://suspicious-bardeen-eb4d7a.netlify.app",
					class: "project-one",
				},
				{
					title: "MoStan",
					paragraphOne:
						"Apartment reservations website for a university project.",
					paragraphTwo:
						"A simple website using HTML, SASS and Vanilla JavaScript on the frontend and PHP on the backend.",
					imgSrc: require("@/assets/images/mostan.png"),
					link: "http://studenti.sum.ba:82/2019/g13/views/",
					class: "project-one",
				},
				{
					title: "Landing page",
					paragraphOne: "Template for a landing page",
					paragraphTwo:
						"A simple customizable template using HTML, SASS and Vanilla JavaScript.",
					imgSrc: require("@/assets/images/landingTemplate.jpg"),
					link: "https://priceless-boyd-880972.netlify.app/",
					class: "project-one",
				},
				{
					title: "Movies",
					paragraphOne:
						"A movie website demonstrating usage of an API.",
					paragraphTwo: "Made with Vue.js.",
					imgSrc: require("@/assets/images/movies.png"),
					link: "https://quirky-hermann-5edc71.netlify.app/",
					class: "project-one",
				},
				{
					title: "Weather app",
					paragraphOne:
						"A weather website demonstrating usage of an API.",
					paragraphTwo:
						"Made with HTML, SCSS and Vanilla JavaScript.",
					imgSrc: require("@/assets/images/weather.png"),
					link: "https://objective-brattain-c06a31.netlify.app/",
					class: "project-one",
				},
			],
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

	@media only screen and(max-width:$v-8) {
		width: 90%;
	}
}
.heading-2 {
	margin-bottom: 10rem;
}
.projects {
	& > *:not(:last-child) {
		margin-bottom: 15rem;
	}
}
.projects-2 {
	margin-top: 15rem;
}
</style>
