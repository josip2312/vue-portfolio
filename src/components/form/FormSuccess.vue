<template>
	<div class="wrapper">
		<div class="success spacing">
			<div class="icon">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="var(--font-primary)"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="check"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					></path>
				</svg>
			</div>
			<div class="content">
				<h3 class="heading-3">
					Your message has been sent.
				</h3>
				<p>Thank you for contacting me!</p>
				<router-link :to="{ name: 'Landing' }">
					<button class="btn">Back to site</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SubmissionSuccess',
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;

	align-items: center;
	justify-content: center;

	min-height: 91vh;
}
.success {
	display: flex;
	flex-direction: column;
	align-items: center;

	text-align: center;
	max-width: 60rem;
	margin: 0 auto;
	background-color: var(--secondary);

	border-radius: 1rem;
	padding: 5rem 2.5rem;
	animation: up 500ms ease-in-out forwards;

	.icon {
		opacity: 0;
		animation: up 750ms ease-in-out forwards;
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 50%;
		background-color: var(--primary);
		background-color: #21b354;
	}
	svg {
		width: 7.5rem;
	}

	.content {
		opacity: 0;
		animation: up 750ms ease-out forwards 500ms;

		p {
			color: var(--font-secondary);
			margin: 2rem 0;
		}
	}
}
</style>
