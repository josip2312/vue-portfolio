<template>
	<div class="showcase container">
		<div class="left spacing">
			<h1 class="heading-1">Delivering quality websites</h1>
			<div class="desc">
				Hi, I'm a web developer passionate about creating beautiful and
				functional websites
			</div>
			<div class="buttons">
				<a class="btn btn-main" href="#work">See my work</a>
				<a class="btn btn-sec" href="#contact">Contact me</a>
			</div>
		</div>
		<div class="right">
			<ShowcaseImage />
		</div>
		<ScrollIndicator />
	</div>
</template>

<script>
import ScrollIndicator from "@/components/ScrollIndicator";
import ShowcaseImage from "@/components/layout/ShowcaseImage";
export default {
	name: "Showcase",
	components: {
		ScrollIndicator,
		ShowcaseImage,
	},
};
</script>

<style lang="scss" scoped>
.showcase {
	position: relative;

	height: 100%;

	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);

	.heading-1 {
		max-width: 50rem;
	}

	@media only screen and(max-width:$v-8) {
		width: 90%;
	}
}

.left {
	grid-column: 1 / -1;
	grid-row: 2 / 5;

	display: flex;
	flex-direction: column;
	justify-content: center;

	z-index: 10;
	@media only screen and(max-width:$v-9) {
		grid-row: 1 / 5;
		grid-column: 1 / -1;
		align-items: center;
		text-align: center;
	}

	.desc {
		width: 90%;
		max-width: 35rem;
		color: var(--font-paragraph);
	}
	.buttons {
		margin-top: 4rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		@media only screen and(max-width:$v-3) {
			flex-direction: column;
		}
		.btn-sec {
			margin-left: 2.5rem;
			@media only screen and(max-width:$v-3) {
				margin-left: 0;
				margin-top: 2.5rem;
			}
		}
	}
}

//animations
.left {
	opacity: 0;
	animation: appear 800ms ease-in-out forwards;
}

.right {
	grid-column: 5 / -1;
	grid-row: 1 / -1;
	align-self: center;
	width: 100%;

	@media only screen and(max-width:$v-9) {
		justify-self: center;
		grid-row: 4 / -1;
		grid-column: 1 / -1;
	}
}
</style>
