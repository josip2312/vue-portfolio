<template>
	<div class="work">
		<h2 class="heading-2" v-scrollanimation>
			My Work
		</h2>

		<div class="projects">
			<div class="project project-one">
				<div class="project-left" v-scrollanimation>
					<h3 class="heading-3">Project name</h3>
					<div class="project-desc">
						Lorem ipsum dolor sit amet
					</div>
				</div>
				<div class="project-right" v-scrollanimation>
					<img src="@/assets/images/4.jpg" alt="" />
				</div>
			</div>
			<div class="project project-two">
				<div class="project-left" v-scrollanimation>
					<h3 class="heading-3">Project name</h3>
					<div class="project-desc">
						Lorem ipsum dolor sit amet
					</div>
				</div>
				<div class="project-right" v-scrollanimation>
					<img src="@/assets/images/4.jpg" alt="" />
				</div>
			</div>
			<div class="project project-three">
				<div class="project-left" v-scrollanimation>
					<h3 class="heading-3">Project name</h3>
					<div class="project-desc">
						Lorem ipsum dolor sit amet
					</div>
				</div>
				<div class="project-right" v-scrollanimation>
					<img src="@/assets/images/4.jpg" alt="" />
				</div>
			</div>
		</div>
		<router-link :to="{ name: 'WorkDetails' }" class="btn" tag="button"
			>See more projects</router-link
		>
	</div>
</template>

<script>
export default {
	name: 'Work',
};
</script>

<style lang="scss" scoped>
//animation on scroll classes
.heading-2.enter {
	animation: up 0.8s ease-in-out forwards;
}

.project-one .project-right.enter,
.project-three .project-right.enter,
.project-two .project-left.enter {
	animation: right 0.8s ease-in-out forwards;
	@media only screen and(max-width:$vp-9) {
		animation: up 0.8s ease-in-out forwards;
	}
}
.project-one .project-left.enter,
.project-three .project-left.enter,
.project-two .project-right.enter {
	animation: left 0.8s ease-in-out forwards;
	@media only screen and(max-width:$vp-9) {
		animation: up 0.8s ease-in-out forwards;
	}
}

.work {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $secondary;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}

.heading-2 {
	@include sectionHeading;
}

.projects {
	padding-top: 10rem;
	padding-bottom: 5rem;
	grid-column: 1 / -1;
	grid-row: 2 / -1;
	& > *:not(:last-child) {
		margin-bottom: 5rem;
	}
}
.project {
	display: flex;
	align-items: center;
	@media only screen and(max-width:$vp-9) {
		flex-direction: column;
	}
	&-desc {
		color: $font-secondary;
	}

	&-left {
		flex: 1;
		text-align: left;
		margin-left: 3rem;
		margin-right: -3rem;
		margin-top: -2rem;
		@media only screen and(max-width:$vp-9) {
			text-align: center;
			margin: 0;
			margin-bottom: 3rem;
		}

		.heading-3 {
			margin-bottom: 1rem;
		}
	}
	&-right {
		border-radius: 3px;
		background-color: $primary;
		flex: 1.4;
		overflow: hidden;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
.project-two {
	flex-direction: row-reverse;
	@media only screen and(max-width:$vp-9) {
		flex-direction: column;
	}
}
.btn {
	justify-self: center;
	grid-column: 1 / -1;
	width: 75%;
	max-width: 27.5rem;
	padding: 1.8rem;
}
</style>
