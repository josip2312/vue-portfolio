<template>
	<article class="project" :class="project.class" data-aos="fade-up">
		<div class="project-left spacing-sm">
			<h3 class="heading-3">{{ project.title }}</h3>
			<p class="project-desc">
				{{ project.paragraphOne }}
			</p>
			<p class="project-desc">{{ project.paragraphTwo }}</p>
			<a class="btn-tertiary" :href="project.link" target="_blank">
				<span> Visit site </span>

				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					></path>
				</svg>
			</a>
		</div>
		<a :href="project.link" target="_blank" class="project-right">
			<img :src="project.imgSrc" alt="Project" />
		</a>
	</article>
</template>

<script>
export default {
	name: "ProjectSingle",
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.project {
	display: flex;
	align-items: center;
	justify-content: space-between;
	@include mq-max($v-10) {
		flex-direction: column;
	}

	&-desc {
		max-width: 35ch;
		margin-right: 2.5rem;
		color: var(--font-paragraph);
		@include mq-max($v-10) {
			max-width: 50rem;
			margin-right: 0;
		}
	}

	&-left {
		flex: 1;
		text-align: left;
		display: flex;
		flex-direction: column;

		@include mq-max($v-10) {
			text-align: center;
			margin-bottom: 3rem;
		}

		.heading-3 {
			margin-bottom: 3rem;
		}
		.btn-tertiary {
			margin-top: 3rem;
			align-self: flex-start;
			@include mq-max($v-10) {
				align-self: center;
			}
		}
	}
	&-right {
		border-radius: var(--br);
		background-color: var(--secondary-500);

		padding: 2.5rem;
		flex: 1.25;
		@include mq-max($v-6) {
			padding: 1rem;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: var(--br);

			backface-visibility: hidden;
			transform: scale(0.98);
			transition: opacity 250ms cubic-bezier(0.49, 0.07, 0.36, 1),
				transform 200ms cubic-bezier(0.49, 0.07, 0.36, 1);
		}
		img:hover {
			transform: scale(1);
			@include mq-max($v-6) {
				transform: scale(0.99);
			}
		}
	}
}
.project-two {
	flex-direction: row-reverse;

	.project-left {
		margin-left: 2.5rem;
	}
	.heading-3 {
		margin-left: 3rem;
		max-width: 35ch;
	}
	.btn-tertiary {
		margin-left: 3rem;
	}
	.project-desc {
		margin-left: 3rem;
	}

	@include mq-max($v-10) {
		flex-direction: column;

		&-desc {
			margin-right: 0;
		}
		.project-left {
			margin-left: 0;
			& > * {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}
}
.project-right:focus {
	outline: 1px solid var(--font-primary);
}
</style>
