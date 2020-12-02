<template>
	<header>
		<nav class="container">
			<router-link :to="{ name: 'Landing' }" class="logo" tag="h2">
				Ivancic Josip
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

			<HamburgerMenu
				@click.native="toggleSidebar"
				@hide-sidebar="isSidebarVisible = false"
				:isSidebarVisible="isSidebarVisible"
			/>
		</nav>

		<TheMobileNav />
	</header>
</template>

<script>
import LightModeButton from "@/components/LightModeButton";
import HamburgerMenu from "@/components/HamburgerMenu";

import TheMobileNav from "@/components/TheMobileNav";
export default {
	name: "Header",
	components: {
		TheMobileNav,
		LightModeButton,
		HamburgerMenu,
	},

	data() {
		return {
			windowWidth: window.innerWidth,
			isSidebarVisible: false,
			currentRoute: "",
		};
	},

	methods: {
		toggleSidebar() {
			this.isSidebarVisible = !this.isSidebarVisible;
		},
		hideSidebar() {
			this.isSidebarVisible = false;
		},
	},

	mounted() {
		window.addEventListener("scroll", () => {
			const header = document.querySelector("header");
			header.classList.toggle("sticky", window.scrollY > 0);
		});
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

	display: flex;
	justify-content: space-between;
	align-items: center;

	.isSidebarVisible {
		opacity: 1;
		transform: translateX(0);
	}

	.logo {
		font-family: "Vegan Style";
		font-size: 2rem;

		font-weight: 400;
		line-height: 1.2;
		margin: 1.5rem 0;
	}

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;

		@include mq-max($v-6) {
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
			margin-right: 4rem;

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
				bottom: -0.25rem;
				height: 4px;
				border-radius: var(--br);
				width: 100%;

				transform: scale(0, 1);
				transform-origin: left;
				transition: transform 250ms ease-in-out;
				background-color: var(--accent);
			}
			a:hover {
				text-decoration: underline;
			}
			.router-link-exact-active:hover {
				text-decoration: none;
			}
			@include mq-max($v-6) {
				font-size: 2.4rem;
				margin: 0;
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
