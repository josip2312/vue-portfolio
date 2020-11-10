<template>
	<div class="scroll-indicator"></div>
</template>

<script>
export default {
	name: "ScrollIndicator",
};
</script>

<style lang="scss" scoped>
.scroll-indicator {
	animation: appear 750ms ease forwards 1400ms;
}
.scroll-indicator {
	position: absolute;
	display: block;
	left: 50%;
	transform: translateX(-50%);
	bottom: 10rem;
	box-shadow: inset 0 0 0 1px var(--font-primary);
	border-radius: 25px;
	height: 7rem;
	width: 4rem;
	opacity: 0;
	@media only screen and(max-width:$v-9) {
		bottom: 5rem;
	}
	@media only screen and(max-width:$v-6) {
		display: none;
		bottom: 10rem;
	}
}
.scroll-indicator::before {
	position: absolute;
	left: 50%;

	margin-left: -0.45rem;
	content: "";
	width: 1rem;
	height: 1rem;

	border-radius: 1rem;
	background: var(--font-primary);
	animation: scroll 2s infinite 350ms;
}
.scroll-indicator::after {
	content: "Scroll";
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -3rem;
}

@keyframes scroll {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: translateY(4rem);
	}
}
</style>