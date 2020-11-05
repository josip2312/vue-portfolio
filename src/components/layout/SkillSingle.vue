<template>
	<div
		class="skill spacing"
		:class="skill.class"
		v-scrollanimation
		tabindex="0"
	>
		<div class="icon">
			<img :src="skill.imgSrc" alt="" />
		</div>
		<div class="skill-desc spacing-sm">
			<h4 class="heading-4">
				{{ skill.title }}
			</h4>
			<span class="skill-tag" v-for="skill in skill.skills" :key="skill">
				{{ skill }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SkillSingle',

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

	background-color: var(--secondary);

	padding: 3rem 2rem;
	border-radius: 0.5rem;

	position: relative;

	transform: scale(1);
	backface-visibility: hidden;
	transition: transform 200ms ease-in-out;
	font-size: 1.8rem;
	&-desc {
		text-align: center;
		.heading-4 {
			font-size: 2.2rem;
			margin-bottom: 2.5rem;
		}
	}
	.icon {
		img {
			width: 7.5rem;
			height: 7.5rem;
		}
	}
	&-tag {
		display: inline-block;
		background-color: var(--tertiary);
		padding: 0.5rem 1.2rem;
		margin: 0.75rem 0.75rem;
		border-radius: 1rem;
		font-weight: 500;
		color: var(--font-secondary);

		transition: background-color 200ms ease-in-out;
		transform: scale(0.89);
		&:hover {
			transform: scale(1);
			background-color: var(--accent);
			color: var(--font-black);
		}
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
		@media only screen and(max-width: $vp-12) {
			grid-column: 1 / -1;
		}
	}
}

.skill:hover {
	transform: scale(1.05);
	@media only screen and(max-width: $vp-6) {
		transform: scale(1);
	}
}
.skill:focus {
	outline: 1px solid var(--font-secondary);
}
</style>
