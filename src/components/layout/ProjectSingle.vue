<template>
	<div class="project" :class="project.class" v-scrollanimation>
		<div class="project-left spacing-sm" v-scrollanimation>
			<h3 class="heading-3">{{ project.title }}</h3>
			<p class="project-desc">
				{{ project.paragraphOne }}
			</p>
			<p class="project-desc">{{ project.paragraphTwo }}</p>
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
	name: 'ProjectSingle',
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
	@media only screen and(max-width:$vp-9) {
		flex-direction: column;
	}

	&-desc {
		max-width: 35ch;
		margin-right: 2.5rem;
		color: var(--font-secondary);
	}

	&-left {
		flex: 1;
		text-align: left;

		@media only screen and(max-width:$vp-9) {
			text-align: center;
			margin-bottom: 3rem;
		}

		.heading-3 {
			margin-bottom: 3rem;
		}
	}
	&-right {
		border-radius: 2rem;
		background-color: var(--secondary-light);

		padding: 2.5rem;
		flex: 1.2;
		@media only screen and(max-width:$vp-6) {
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
			@media only screen and(max-width:$vp-6) {
				transform: scale(0.975);
			}
		}
	}
	@media only screen and(max-width:$vp-9) {
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
	.project-desc {
		margin-left: 3rem;
	}

	@media only screen and(max-width:$vp-9) {
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

//class for displaying all projects the same way in WorkDetails view
.not-reverse {
	flex-direction: row;
	.project-left {
		margin-left: 0;
	}
	.heading-3 {
		margin-left: 0;
		max-width: 35ch;
	}
	.project-desc {
		margin-left: 0;
	}
	@media only screen and(max-width:$vp-9) {
		flex-direction: column;
	}
}
.project-one.before-enter,
.project-three.before-enter,
.project-two.before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.project-one.enter,
.project-three.enter,
.project-two.enter {
	opacity: 1;
	transform: translateY(0);
}
</style>
