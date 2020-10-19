<template>
	<div class="project" :class="project.class">
		<div class="project-left" v-scrollanimation>
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
			margin-bottom: 2rem;
		}
	}
	&-right {
		border-radius: 3px;
		background-color: var(--primary);

		flex: 1.2;

		img {
			width: 100%;

			height: 100%;
			object-fit: cover;
		}
	}
	@media only screen and(max-width:$vp-9) {
		&-desc {
			margin-right: 0;
		}
	}
}
.project-two {
	flex-direction: row-reverse;
	.project-left {
		margin-left: 2.5rem;
		text-align: center;
	}
	.project-desc {
		margin: 0 auto !important;
	}

	@media only screen and(max-width:$vp-9) {
		.project-left {
			margin-left: 0;
		}
		flex-direction: column;
	}
}

//custom scroll animations
.project-one .project-right.before-enter,
.project-three .project-right.before-enter,
.project-two .project-left.before-enter {
	opacity: 0;
	transform: translateX(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
	@media only screen and(max-width:$vp-9) {
		opacity: 0;
		transform: translateY(5rem);
		transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
	}
}
.project-one .project-right.enter,
.project-three .project-right.enter,
.project-two .project-left.enter {
	opacity: 1;
	transform: translateX(0);
	@media only screen and(max-width:$vp-9) {
		opacity: 1;
		transform: translateY(0);
	}
}
.project-one .project-left.before-enter,
.project-three .project-left.before-enter,
.project-two .project-right.before-enter {
	opacity: 0;
	transform: translateX(-5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
	@media only screen and(max-width:$vp-9) {
		opacity: 0;
		transform: translateY(5rem);
		transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
	}
}
.project-one .project-left.enter,
.project-three .project-left.enter,
.project-two .project-right.enter {
	opacity: 1;
	transform: translateX(0);
	@media only screen and(max-width:$vp-9) {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
