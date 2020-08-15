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
	</div>
</template>

<script>
export default {
	name: 'Work',
};
</script>

<style lang="scss" scoped>
//animations on scroll
.heading-2.enter {
	animation: up 0.8s ease-in-out forwards;
}

.project-one .project-right.enter,
.project-three .project-right.enter {
	animation: right 0.8s ease-in-out forwards;
}
.project-one .project-left.enter,
.project-three .project-left.enter {
	animation: left 0.8s ease-in-out forwards;
}

.project-two .project-right.enter {
	animation: left 0.8s ease-in-out forwards;
}
.project-two .project-left.enter {
	animation: right 0.8s ease-in-out forwards;
}

.work {
	width: 90%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $secondary;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
}

.heading-2 {
	grid-column: 1 / -1;
	grid-row: 1 / 2;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		top: 3.5rem;
		left: 0;
		height: 5px;
		width: 6rem;
		border-radius: 1rem;
		background-color: $accent;
	}
}

.projects {
	padding-top: 10rem;
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
</style>
<style lang="scss" module>
.enter {
	animation: left 1s ease-in-out forwards;
}
</style>
