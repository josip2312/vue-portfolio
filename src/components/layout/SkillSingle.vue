<template>
	<div
		class="skill spacing-sm"
		:class="[{ expanded: isExpanded }, skill.class]"
		v-scrollanimation
		@click="expandSkills(skill)"
	>
		<div class="icon">
			<img :src="skill.imgSrc" alt="" />
		</div>
		<div class="skill-desc spacing-sm">
			<h4 class="heading-4">
				{{ skill.title }}
			</h4>
			<p class="skill-skills">
				{{ skill.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SkillSingle',
	data() {
		return {
			isExpanded: false,
		};
	},

	props: {
		skill: {
			type: Object,
			required: true,
		},
	},
	methods: {
		expandSkills(skill) {
			skill.isExpanded = !skill.isExpanded;
		},
	},
};
</script>

<style lang="scss" scoped>
.skill {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: var(--secondary);

	padding: 3rem 2rem;

	position: relative;

	.icon {
		img {
			width: 7.5rem;
			height: 7.5rem;
			stroke: #fff;
		}
	}
	&-skills {
		font-size: 1.8rem;
	}
	&-desc {
		max-width: 30rem;
		color: var(--font-secondary);
		text-align: center;
	}
	&-one {
		grid-column: 1 / 4;
	}
	&-two {
		grid-column: 5 / 8;
	}
	&-three {
		grid-column: 9 / -1;
	}

	&-one,
	&-two,
	&-three {
		@media only screen and(max-width: $vp-9) {
			grid-column: 1 / -1;
		}
	}
}

.skill:hover {
	background-color: var(--secondary-light);
}
</style>
