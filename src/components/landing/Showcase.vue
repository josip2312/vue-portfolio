<template>
	<div class="showcase">
		<div class="left" v-scrollanimation>
			<h1 class="heading-1">Delivering Quality</h1>
			<div class="desc">
				Web developer, Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Et, iusto.
			</div>
			<div class="buttons">
				<button class="btn">See my work</button>
				<button class="btn btn-sec">Contact me</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Showcase',
};
</script>

<style lang="scss" scoped>
.showcase {
	width: 80%;
	max-width: 120rem;
	height: 100%;
	margin: 0 auto;
	background-color: $primary;

	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(6, 1fr);

	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
}

.left {
	grid-column: 1 / 8;
	grid-row: 2 / 5;
	@media only screen and(max-width:$vp-9) {
		grid-column: 1 / -1;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > *:not(:last-child) {
		margin-bottom: 1.5rem;
	}
	.desc {
		width: 75%;
		max-width: 35rem;
		color: $font-secondary;
	}
	.buttons {
		margin-top: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.btn-sec {
			margin-left: 2rem;
		}
	}
}
</style>
