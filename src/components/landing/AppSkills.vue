<template>
	<div class="skills container">
		<div class="heading-2" data-aos="fade">Skills</div>

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
import { skills } from "@/data/skills";
import SkillSingle from "@/components/layout/SkillSingle";
export default {
	name: "Skills",
	components: {
		SkillSingle,
	},
	data() {
		return {
			skills: skills /* [
				{
					title: "Frontend",
					skills: ["HTML", "CSS", "SCSS", "JavaScript", "Vue.js"],
					imgSrc: require("@/assets/icons/frontend.svg"),
					class: "skill-one",
				},
				{
					title: "Backend",
					skills: ["Node.js", "Express", "Socket.io", "MongoDB"],
					imgSrc: require("@/assets/icons/backend.svg"),
					class: "skill-two",
				},
				{
					title: "Web Design",
					skills: ["Figma", "Dribbble", "Behance", "Resources"],
					imgSrc: require("@/assets/icons/design.svg"),
					class: "skill-three",
				},
			], */,
		};
	},
};
</script>

<style lang="scss" scoped>
.skills {
	background-color: var(--primary);
}

.skills-container {
	padding-top: 7.5rem;
	align-self: center;
	grid-column: 1 / -1;
	grid-row: 2;

	display: grid;
	column-gap: 5rem;
	grid-template-columns: repeat(3, 1fr);
	@include mq-max($v-10) {
		column-gap: 0;
		grid-template-columns: 1fr;
		row-gap: 5rem;
	}
}
</style>
