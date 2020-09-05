<template>
	<div class="skills">
		<div class="heading-2" v-scrollanimation>Skills</div>

		<div class="skills-container">
			<div class="skill skill-one" v-scrollanimation>
				<div class="icon">
					<img src="@/assets/images/icons/frontend.svg" alt="" />
				</div>
				<div class="skill-desc">
					<h4 class="heading-4">
						Frontend
					</h4>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</div>
			</div>
			<div class="skill skill-two" v-scrollanimation>
				<div class="icon">
					<img src="@/assets/images/icons/backend.svg" alt="" />
				</div>
				<div class="skill-desc">
					<h4 class="heading-4">
						Backend
					</h4>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</div>
			</div>
			<div class="skill skill-three" v-scrollanimation>
				<div class="icon">
					<img src="@/assets/images/icons/design.svg" alt="" />
				</div>
				<div class="skill-desc">
					<h4 class="heading-4">
						Web Design
					</h4>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.enter {
	animation: up 0.8s ease-in-out forwards;
}

.skills {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $primary;

	display: grid;
	grid-template-columns: repeat(11, 1fr);
	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}

.heading-2 {
	@include sectionHeading;
}
.skills-container {
	padding-top: 10rem;
	align-self: center;
	grid-column: 1 / -1;
	grid-row: 2 / -1;

	display: grid;
	row-gap: 2.5rem;
	grid-template-columns: repeat(11, 1fr);
}
.skill {
	background-color: $secondary;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 3rem 2rem;
	.icon {
		img {
			width: 7.5rem;
			height: 7.5rem;
		}
	}
	&-desc {
		max-width: 30rem;
		color: $font-secondary;
		text-align: center;

		.heading-4 {
			margin-bottom: 1rem;
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
	&-one:hover,
	&-two:hover,
	&-three:hover {
		background-color: $secondary-light;
	}
	&-one,
	&-two,
	&-three {
		transition: all 0.2s ease-out;
		@media only screen and(max-width:$vp-9) {
			grid-column: 1 / -1;
		}
	}
}
</style>
