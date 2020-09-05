<template>
	<header>
		<nav>
			<div class="logo">
				Logo
			</div>
			<ul :class="{ isVisible: isVisible }">
				<li><a href="#work">My Work</a></li>
				<li><a href="#about">About me</a></li>
				<li><a href="#contact">Contact me</a></li>
			</ul>

			<div
				class="hamburger-menu"
				v-if="isMobile"
				@click="showSidebar"
				v-click-outside="hideSidebar"
			>
				<div class="menu-top" :class="{ active: isVisible }"></div>
				<div class="menu-mid" :class="{ active: isVisible }"></div>
				<div class="menu-down" :class="{ active: isVisible }"></div>
			</div>
		</nav>

		<div class="mobile-nav" v-if="isMobile">
			<a href="#work">
				<img src="../assets/images/icons/work.svg" alt="Work icon" />
				<span>
					My Work
				</span>
			</a>
			<a href="#contact">
				<img
					src="../assets/images/icons/contact.svg"
					alt="Contact me icon"
				/>
				<span>
					Contact me
				</span>
			</a>
		</div>
	</header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
	name: 'Header',
	data() {
		return {
			windowWidth: window.innerWidth,
			isVisible: false,
		};
	},
	computed: {
		isMobile() {
			return this.windowWidth <= 568;
		},
	},

	methods: {
		showSidebar() {
			this.isVisible = !this.isVisible;
		},
		hideSidebar() {
			this.isVisible = false;
		},
	},

	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth;
		});
		this.popupItem = this.$el;
	},

	directives: {
		ClickOutside,
	},
};
</script>

<style scoped lang="scss">
header {
	display: flex;
	align-items: center;
	height: 9vh;
	background-color: $primary-dark;
}
nav {
	width: 80%;
	max-width: 120rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	@media only screen and(max-width:$vp-8) {
		width: 90%;
	}
	.hamburger-menu {
		padding: 1rem 1.5rem;
		position: fixed;

		right: 10%;
		cursor: pointer;
		z-index: 30;
		& > * {
			left: 0;
			transition: all 0.2s ease-out;
			transform-origin: center;
			height: 3px;
			width: 3rem;
			background-color: $font-primary;
		}
		.menu-top,
		.menu-mid,
		.menu-down {
			top: 0;
			position: absolute;
			transform: rotate(0);
		}
		.menu-mid {
			top: 1rem;
		}
		.menu-down {
			top: 2rem;
		}
		.menu-top.active,
		.menu-down.active {
			position: absolute;
			top: 1rem;
			width: 3rem;
		}
		.menu-top.active {
			transform: rotate(135deg);
		}
		.menu-down.active {
			transform: rotate(-135deg);
		}
		.menu-mid.active {
			opacity: 0;
		}
	}
	.isVisible {
		opacity: 1;
		transform: translateX(0);
	}

	.logo {
	}

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;

		@media only screen and(max-width:$vp-6) {
			transform: translateX(50vw);
			transition: all 0.2s ease-out;
			transform-origin: right;

			flex-direction: column;
			justify-content: center;
			position: fixed;
			right: 0;
			top: 0;

			background-color: $primary;
			height: 92vh;
			width: 50vw;
			z-index: 10;

			text-align: center;
		}
		li {
			cursor: pointer;
			transition: all 0.2s ease-out;

			&:not(:last-child) {
				margin-right: 3.5rem;
			}
			@media only screen and(max-width:$vp-6 ) {
				font-size: 2.4rem;
				margin: 0 !important;
				padding: 2.5rem 0;
			}
		}
		li:hover {
			opacity: 0.8;
		}
	}
}
.mobile-nav {
	display: flex;
	justify-content: space-around;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 8vh;

	background-color: $primary-dark;
	z-index: 20;

	a {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			margin-right: 1rem;
			width: 2.5rem;
			height: 2.5rem;
		}
	}
}
</style>
