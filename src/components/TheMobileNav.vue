<template>
	<div class="mobile-nav">
		<router-link :to="{ name: 'Landing' }">
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="var(--font-primary)"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				></path>
			</svg>
			<span> Home </span>
		</router-link>
		<router-link :to="{ name: 'WorkDetails' }">
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="var(--font-primary)"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				></path>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				></path>
			</svg>
			<span> My Work </span>
		</router-link>
		<router-link :to="{ name: 'About' }">
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="var(--font-primary)"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
			<span> About me </span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "TheMobileNav",
};
</script>

<style lang="scss" scoped>
.mobile-nav {
	@include mq-min($v-6) {
		display: none;
	}
	display: flex;
	justify-content: space-around;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;

	background-color: var(--primary-600);
	z-index: 100;

	a {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: opacity 0.2s ease-out;
		padding: 1.35rem 0;
		svg {
			width: 3rem;
			margin-right: 0.5rem;
		}
	}
	a:hover {
		opacity: 0.8;
	}
	.router-link-exact-active {
		background-color: var(--primary-300);
	}
}
</style>
