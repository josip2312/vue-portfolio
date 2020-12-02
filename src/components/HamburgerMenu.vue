<template>
	<button class="nav-toggle" v-click-outside="hideSidebar">
		<span class="hamburger" :class="{ active: isSidebarVisible }"></span>
	</button>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
	name: "HamburgerMenu",
	props: {
		isSidebarVisible: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		hideSidebar() {
			this.$emit("hide-sidebar");
		},
	},
	mounted() {
		this.popupItem = this.$el;
	},
	directives: {
		ClickOutside,
	},
};
</script>

<style lang="scss" scoped>
//hamburger menu
.nav-toggle {
	display: none;

	@include mq-max($v-6) {
		display: inline-block;
	}

	position: absolute;
	right: 0%;
	transform: translateX(5%);

	border: 0;
	outline: none;
	border-radius: 0.25em 0 0 0.25em;
	background-color: transparent;
	padding: 1em 0.5em;
	cursor: pointer;
	z-index: 30;

	.hamburger {
		position: relative;
		display: block;
	}
	//hamburger animations
	.hamburger,
	.hamburger::before,
	.hamburger::after {
		height: 3px;
		width: 2em;
		border-radius: 1rem;
		background-color: var(--font-primary);
		transition: transform 250ms ease-in-out, opacity 250ms linear;
	}

	.hamburger::before,
	.hamburger::after {
		content: "";
		position: absolute;
		left: 0;
	}

	.hamburger::before {
		bottom: 1rem;
	}
	.hamburger::after {
		top: 1rem;
	}

	.hamburger.active {
		transform: rotate(135deg);
	}
	.hamburger.active::before {
		opacity: 0;
	}
	.hamburger.active::after {
		transform: rotate(90deg) translate(-1rem);
	}
}
</style>