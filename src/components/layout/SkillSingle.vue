<template>
	<div
		class="skill spacing"
		:class="skill.class"
		tabindex="0"
		data-aos="fade-up"
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
	name: "SkillSingle",

	props: {
		skill: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.skill {
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: var(--secondary-400);
	padding: 3rem 2rem;
	border-radius: var(--br);
	font-size: 1.8rem;

	transition: transform 250ms cubic-bezier(0.49, 0.07, 0.36, 1);
	&-desc {
		text-align: center;
		.heading-4 {
			font-size: 2.2rem;
			margin-bottom: 2.5rem;
		}
	}
	.icon {
		img {
			width: 7rem;
			height: 7rem;
		}
	}
	&-tag {
		display: inline-block;
		background-color: var(--secondary-200);
		padding: 0.5rem 1.2rem;
		margin: 0.75rem 0.75rem;
		border-radius: 1rem;

		font-weight: 500;
		color: var(--font-paragraph);

		transition: background-color 200ms ease-in-out;
		transform: scale(0.9);
		&:hover {
			--font-primary: #fcfcfc;
			transform: scale(1);
			color: var(--font-primary);
			background-color: var(--accent);
		}
	}
}

.skill:hover {
}
.skill:focus {
	outline: 1px solid var(--font-primary);
}
</style>
