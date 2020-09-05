<template>
	<section id="work-details">
		<div class="details">
			<div class="projects">
				<div class="project project-one">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<div class="project project-two">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<div class="project project-three">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<!-- <div class="project project-four">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div> -->
			</div>
			<div class="projects-2">
				<div class="project project-one">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<div class="project project-two">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<div class="project project-three">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div>
				<!-- <div class="project project-four">
					<div class="project-top" v-scrollanimation>
						<h3 class="heading-3">Project name</h3>
						<div class="project-desc">
							Lorem ipsum dolor sit amet
						</div>
					</div>
					<div class="project-bottom" v-scrollanimation>
						<img src="@/assets/images/4.jpg" alt="" />
					</div>
				</div> -->
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#work-details {
	background-color: $secondary;
	padding: 7.5rem 0;
	min-height: 91vh;
}
.details {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;

	display: grid;

	grid-template-columns: repeat(11, 1fr);
	row-gap: 5rem;
	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}
.projects {
	grid-column: 1 / -1;
	grid-row: 1 / -1;

	display: grid;
	row-gap: 2.5rem;
	grid-template-columns: repeat(11, 1fr);
}
.projects-2 {
	grid-column: 1 / -1;

	display: grid;
	row-gap: 2.5rem;
	grid-template-columns: repeat(11, 1fr);
}
.project {
	display: flex;
	flex-direction: column;

	&-one {
		grid-column: 1 / 4;
	}
	&-two {
		grid-column: 5 / 8;
	}
	&-three {
		grid-column: 9 / -1;
	}
	@media only screen and(max-width:$vp-9) {
		&-one,
		&-two,
		&-three {
			grid-column: 1 / -1;
		}
	}

	&-desc {
		color: $font-secondary;
	}

	&-top {
		text-align: center;
		margin-bottom: 2.5rem;
		.heading-3 {
			margin-bottom: 1rem;
		}
	}
	&-bottom {
		border-radius: 3px;

		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			@media only screen and(max-width:$vp-9) {
				width: 75%;
				height: 75%;
			}
		}
	}
}
</style>
