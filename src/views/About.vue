<template>
	<div class="about-container">
		<section class="about container">
			<div class="about-left">
				<div class="about-image">
					<img src="@/assets/images/me.jpeg" alt="A picture of me" />
				</div>
			</div>
			<div class="about-right">
				<div class="about-heading spacing-lg">
					<h2 class="heading-2">About me</h2>
					<p class="about-bio">
						Highly invested and passionate about creating high
						quality websites. Recently received a Bachelor's degree
						in Computer Science at the University of Mostar.
					</p>
					<p class="about-bio">
						Currently actively searching for a job.
					</p>
					<div class="about-links">
						<a
							href="https://github.com/josip2312"
							target="_blank"
							class="about-link"
							>Github</a
						>
						<a
							href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
							target="_blank"
							class="about-link"
							>Linkedin</a
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "About",
	metaInfo: {
		title: "Josip Ivancic",
		titleTemplate: "%s | About me",
	},
};
</script>

<style lang="scss" scoped>
.about-container {
	background-color: var(--primary-400);
	display: flex;
	justify-content: center;
	min-height: 100vh;
}
.about {
	display: flex;
	justify-content: center;

	padding: 10rem 0;

	@include mq-max($v-9) {
		flex-direction: column;
	}
}
.about-left {
	flex: 1;
	margin-right: 2.5rem;
	align-self: center;

	opacity: 0;
	animation: appear 800ms ease-in-out forwards;

	.about-image {
		width: 100%;
		max-width: 50rem;
		img {
			border-radius: 0.5rem;
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

	opacity: 0;
	animation: left 500ms ease forwards 600ms;

	.about-heading {
		max-width: 40rem;
		.heading-2 {
			margin-bottom: 5rem;
		}
	}
}
.about-left,
.about-right {
	@include mq-max($v-9) {
		margin: 0;

		&:first-child {
			margin-bottom: 5rem;
		}
	}
}
.about-bio {
	color: var(--font-paragraph);
}
.about-links {
	.about-link {
		margin-right: 2.5rem;
		color: var(--accent-2);
		text-decoration: underline;
	}
}
.light-mode {
	.about-link {
		color: var(--accent);
	}
}
</style>
