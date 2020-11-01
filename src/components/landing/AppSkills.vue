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
					skills: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Vue.js'],
					imgSrc: require('@/assets/images/icons/frontend.svg'),
					class: 'skill-one',
				},
				{
					title: 'Backend',
					skills: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
					imgSrc: require('@/assets/images/icons/backend.svg'),
					class: 'skill-two',
				},
				{
					title: 'Web Design',
					skills: ['Figma', 'Dribbble', 'Behance', 'Resources'],
					imgSrc: require('@/assets/images/icons/design.svg'),
					class: 'skill-three',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
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
	grid-row: 1;
	grid-column: 1;
}
.skills-container {
	padding-top: 7.5rem;
	align-self: center;
	grid-column: 1 / -1;
	grid-row: 2;

	display: grid;
	row-gap: 3.5rem;
	grid-template-columns: repeat(11, 1fr);
}

//scroll animations
.before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.enter {
	opacity: 1;
	transform: translateY(0) scale(1);
}
.heading-2.before-enter .before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.heading-2.enter {
	opacity: 1;
	transform: translateY(0);
}
</style>
