<template>
	<button
		class="toggleLightMode "
		@click.prevent="toggleLightMode"
		aria-label="Toggle light mode"
	>
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="var(--font-primary)"
				d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
			/>
		</svg>
	</button>
</template>

<script>
export default {
	name: 'LightModeButton',
	data() {
		return {
			lightModeToggled: localStorage.getItem('light-mode'),
		};
	},
	methods: {
		toggleLightMode() {
			let lightMode = localStorage.getItem('light-mode');

			if (lightMode !== 'enabled') {
				this.enableLightMode();
			} else {
				this.disableLightMode();
			}
		},
		enableLightMode() {
			this.lightModeToggled = !this.lightModeToggled;
			document.body.classList.add('light-mode');
			localStorage.setItem('light-mode', 'enabled');
		},
		disableLightMode() {
			this.lightModeToggled = !this.lightModeToggled;
			document.body.classList.remove('light-mode');
			localStorage.setItem('light-mode', null);
		},
	},
	mounted() {
		if (localStorage.getItem('light-mode') === 'enabled') {
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
		transition: transform 200ms ease;
	}

	svg:hover {
		transform: scale(1.1);
	}
}
</style>
