<template>
	<div class="wrapper">
		<div class="success spacing-lg">
			<div class="icon">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="var(--font-primary)"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</div>
			<div class="content">
				<h3 class="heading-3">Something went wrong!</h3>
				<p>Try sending the message again</p>
				<router-link :to="{ name: 'Landing' }">
					<button class="btn">Try again</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SubmissionSuccess",
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;

	align-items: center;
	justify-content: center;

	min-height: 100vh;
}
.success {
	display: flex;
	flex-direction: column;
	align-items: center;

	text-align: center;
	max-width: 70rem;
	margin: 0 auto;
	background-color: var(--secondary);
	border-radius: 1rem;
	padding: 5rem 3.5rem;
	animation: up 500ms ease-in-out forwards;

	.icon {
		opacity: 0;
		animation: up 750ms ease-in-out forwards;
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 50%;
		background-color: var(--primary);
		background-color: #d4324d;
	}
	svg {
		width: 7.5rem;
	}

	.content {
		opacity: 0;
		animation: up 750ms ease-out forwards 500ms;

		p {
			color: var(--font-secondary);
			font-size: 1.8rem;
			margin: 2.5rem 0;
		}
	}
}
</style>
