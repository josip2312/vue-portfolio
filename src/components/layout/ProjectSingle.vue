<template>
	<div class="project" :class="project.class" v-scrollanimation>
		<div class="project-left spacing-sm" v-scrollanimation>
			<h3 class="heading-3">{{ project.title }}</h3>
			<p class="project-desc">
				{{ project.paragraphOne }}
			</p>
			<p class="project-desc">{{ project.paragraphTwo }}</p>
			<a class="btn-tertiary" :href="project.link" target="_blank">
				<span> See more </span>

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
		<a
			:href="project.link"
			target="_blank"
			class="project-right"
			v-scrollanimation
		>
			<img :src="project.imgSrc" alt="Project" />
		</a>
	</div>
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
	@media only screen and(max-width:$v-9) {
		flex-direction: column;
	}

	&-desc {
		max-width: 35ch;
		margin-right: 2.5rem;
		color: var(--font-paragraph);
	}

	&-left {
		flex: 1;
		text-align: left;
		display: flex;
		flex-direction: column;

		@media only screen and(max-width:$v-9) {
			text-align: center;
			margin-bottom: 3rem;
		}

		.heading-3 {
			margin-bottom: 3rem;
		}
		.btn-tertiary {
			margin-top: 3rem;
			align-self: flex-start;
			@media only screen and(max-width:$v-9) {
				align-self: center;
			}
		}
	}
	&-right {
		border-radius: 1rem;
		background-color: var(--secondary-500);

		padding: 2.5rem;
		flex: 1.2;
		@media only screen and(max-width:$v-6) {
			padding: 1rem;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;

			backface-visibility: hidden;
			transform: scale(0.975);
			transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
		}
		img:hover {
			transform: scale(1);
			@media only screen and(max-width:$v-6) {
				transform: scale(0.975);
			}
		}
	}
	@media only screen and(max-width:$v-9) {
		&-desc {
			max-width: 40ch;
			margin-right: 0;
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

	@media only screen and(max-width:$v-9) {
		flex-direction: column;
		&-desc {
			margin-right: 0 !important;
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

.project-one.before-enter,
.project-three.before-enter,
.project-two.before-enter {
	opacity: 0;
	transform: translateY(4rem);
	transition: transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
		opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.project-one.enter,
.project-three.enter,
.project-two.enter {
	opacity: 1;
	transform: translateY(0);
}
</style>
