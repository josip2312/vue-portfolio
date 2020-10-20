<template>
	<div class="skills">
		<div class="heading-2" v-scrollanimation>Skills</div>

		<div class="skills-container">
			<SkillSingle
				v-for="(skill, index) in skills"
				:key="index"
				:skill="skill"
			/>
		</div>
	</div>
</template>

<script>
import SkillSingle from '@/components/layout/SkillSingle';
export default {
	name: 'Skills',
	components: {
		SkillSingle,
	},
	data() {
		return {
			skills: [
				{
					title: 'Frontend',
					description: 'HTML, CSS, SCSS, JavaScript, Vue.js',
					imgSrc: require('@/assets/images/icons/frontend.svg'),
					svgSrc: `<svg class="w-6 h-6" fill="none" stroke="var(--font-primary)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
					class: 'skill-one',
					isExpanded: false,
				},
				{
					title: 'Backend',
					description: 'Node.js, Express, Socket.io, MongoDB',
					imgSrc: require('@/assets/images/icons/backend.svg'),
					class: 'skill-two',
					isExpanded: false,
				},
				{
					title: 'Web Design',
					description: 'Figma and awesome resources',
					imgSrc: require('@/assets/images/icons/design.svg'),
					class: 'skill-three',
					isExpanded: false,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.enter {
	opacity: 1;
	transform: translateY(0);
}
.skills {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: var(--primary);

	display: grid;
	grid-template-columns: repeat(11, 1fr);
	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}

.heading-2 {
	@include sectionHeading;
}
.skills-container {
	padding-top: 10rem;
	align-self: center;
	grid-column: 1 / -1;
	grid-row: 2 / -1;

	display: grid;
	row-gap: 3.5rem;
	grid-template-columns: repeat(11, 1fr);
}
</style>
