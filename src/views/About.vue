<template>
	<div class="about-container">
		<section class="about">
			<div class="about-left">
				<div class="about-image">
					<img src="@/assets/images/user.jpg" alt="" />
				</div>
			</div>
			<div class="about-right">
				<div class="about-heading spacing-lg">
					<h2 class="heading-2">About me</h2>
					<p class="about-bio">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium sapiente aperiam molestiae eos earum porro
						fugit nisi ad ex. Quibusdam.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, ipsa!
					</p>
					<div href="">Lorem, ipsum dolor.</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'About',
};
</script>

<style lang="scss" scoped>
.about-container {
	background-color: var(--primary);
	display: flex;
	justify-content: center;
	min-height: 100vh;
}
.about {
	display: flex;
	justify-content: center;

	padding: 10rem 0;
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;

	@media only screen and(max-width:$vp-8) {
		width: 90%;
		flex-direction: column;
	}
}
.about-left {
	flex: 1;
	margin-right: 2.5rem;
	align-self: center;
	.about-image {
		border-radius: 3px;
		width: 100%;
		max-width: 50rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
.about-right {
	flex: 1;
	margin-left: 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.about-heading {
		max-width: 40rem;
		.heading-2 {
			margin-bottom: 5rem;
		}
	}
}
.about-left,
.about-right {
	@media only screen and(max-width:$vp-8) {
		margin: 0;
		&:first-child {
			margin-bottom: 5rem;
		}
	}
}
</style>
