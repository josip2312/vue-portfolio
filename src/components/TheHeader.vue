<template>
	<header>
		<nav>
			<router-link :to="{ name: 'Landing' }" class="logo">
				Logo
			</router-link>
			<ul :class="{ isSidebarVisible: isSidebarVisible }">
				<li>
					<router-link
						:to="{ name: 'Landing' }"
						@click.native="hideSidebar"
						>Home</router-link
					>
				</li>
				<li>
					<router-link
						:to="{ name: 'WorkDetails' }"
						@click.native="hideSidebar"
						>Work</router-link
					>
				</li>
				<li class="about">
					<router-link
						:to="{ name: 'About' }"
						@click.native="hideSidebar"
					>
						About me
					</router-link>
				</li>
			</ul>
			<LightModeButton />

			<button
				class="nav-toggle"
				@click="showSidebar"
				v-click-outside="hideSidebar"
			>
				<span
					class="hamburger"
					:class="{ active: isSidebarVisible }"
				></span>
			</button>
		</nav>

		<TheMobileNav />
	</header>
</template>

<script>
import ClickOutside from "vue-click-outside";
import LightModeButton from "@/components/LightModeButton";

import TheMobileNav from "@/components/TheMobileNav";
export default {
	name: "Header",
	components: {
		TheMobileNav,
		LightModeButton,
	},

	data() {
		return {
			windowWidth: window.innerWidth,
			isSidebarVisible: false,
			currentRoute: "",
		};
	},

	methods: {
		showSidebar() {
			this.isSidebarVisible = !this.isSidebarVisible;
		},
		hideSidebar() {
			this.isSidebarVisible = false;
		},
		sendToIndex() {
			this.$router.push({ name: "Index" });
			this.currentRoute = "Index";
		},
		sendToAbout() {
			this.$router.push({ name: "About" });
			this.currentRoute = "About";
		},
	},

	mounted() {
		this.popupItem = this.$el;
		window.addEventListener("scroll", () => {
			const header = document.querySelector("header");
			header.classList.toggle("sticky", window.scrollY > 0);
		});
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

	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	background-color: transparent;

	transition: background-color 300ms ease-in-out;
	z-index: 100;
	border-top: 3px solid var(--accent);
}
.sticky {
	background-color: var(--primary-500);
}
nav {
	position: relative;
	width: 80%;
	max-width: 120rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	@media only screen and(max-width:$v-8) {
		width: 90%;
	}
	//hamburger menu
	.nav-toggle {
		display: none;
		@media only screen and(max-width:$v-6) {
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

	.isSidebarVisible {
		opacity: 1;
		transform: translateX(0);
	}

	.logo {
		font-size: 2rem;
		padding: 1.5rem 0;
	}

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;

		@media only screen and(max-width:$v-6) {
			transform: translateX(65vw);
			transition: transform 250ms ease-in-out;
			transform-origin: right;

			flex-direction: column;
			justify-content: center;
			position: fixed;
			right: 0;
			top: 0;

			box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
			background-color: var(--primary-500);
			height: 100vh;
			width: 65vw;
			z-index: 10;

			text-align: center;
		}
		li {
			cursor: pointer;
			transition: opacity 0.2s ease-out;

			& {
				margin-right: 4rem;
			}

			a {
				position: relative;
				font-weight: 500;
				padding: 0.5rem 0;
				color: var(--font-primary);
			}

			a::after {
				content: "";
				position: absolute;

				left: 0;
				bottom: 0;
				height: 4px;
				border-radius: 3px;
				width: 100%;

				transform: scale(0, 1);
				transform-origin: left;
				transition: transform 200ms ease-in-out;
				background-color: var(--accent);
			}
			a:hover {
				text-decoration: underline;
			}
			.router-link-exact-active:hover {
				text-decoration: none;
			}
			@media only screen and(max-width:$v-6 ) {
				font-size: 2.4rem;
				margin: 0 !important;
				padding: 2.5rem 0;
			}
		}
		.about {
			margin-right: 0;
		}
	}
}

.router-link-exact-active::after {
	transform: scale(1, 1);
}
</style>
