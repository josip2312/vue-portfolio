<template>
	<button
		class="toggleLightMode"
		@click.prevent="toggleLightMode"
		@mouseout="unFocusButton"
		aria-label="Toggle light mode"
	>
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="var(--font-primary)"
				d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
			/>
		</svg>
		<div class="tooltip" role="label">
			Click to enable {{ lightModeToggled ? "Light" : "Dark" }} Mode
		</div>
	</button>
</template>

<script>
export default {
	name: "LightModeButton",
	data() {
		return {
			lightModeToggled: localStorage.getItem("light-mode"),
		};
	},
	methods: {
		toggleLightMode() {
			let lightMode = localStorage.getItem("light-mode");

			if (lightMode !== "enabled") {
				this.enableLightMode();
			} else {
				this.disableLightMode();
			}
		},
		enableLightMode() {
			this.lightModeToggled = !this.lightModeToggled;
			document.body.classList.add("light-mode");
			localStorage.setItem("light-mode", "enabled");
		},
		disableLightMode() {
			this.lightModeToggled = !this.lightModeToggled;
			document.body.classList.remove("light-mode");
			localStorage.setItem("light-mode", null);
		},
		unFocusButton() {
			document.querySelector(".toggleLightMode").blur();
		},
	},
	mounted() {
		if (localStorage.getItem("light-mode") === "enabled") {
			this.enableLightMode();
		}
	},
};
</script>

<style lang="scss" scoped>
.toggleLightMode {
	z-index: 50;
	position: absolute;
	right: 0%;
	top: 8rem;

	background: none;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;

	cursor: pointer;

	svg {
		position: relative;
		width: 2.5rem;
		height: 2.5rem;
	}

	svg:hover {
		transform: scale(1.05);
	}
	svg:hover ~ .tooltip {
		opacity: 1;
	}
}
.toggleLightMode:focus {
	outline: none;
	.tooltip {
		opacity: 1;
	}
}
.tooltip {
	position: absolute;
	top: 4rem;
	color: var(--font-primary);
	font-weight: 500;
	left: -15rem;
	background-color: var(--secondary-200);
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

	padding: 1rem;
	pointer-events: none;
	width: 17.5rem;
	transition: opacity 200ms ease-in-out;
	opacity: 0;
}
</style>
