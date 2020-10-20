<template>
	<div id="app">
		<TheHeader />
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
		<div class="wrap">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</div>

		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
	},
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

<style lang="scss">
.wrap {
	min-height: 90vh;
	background-color: var(--primary);
	position: relative;
}
@import 'assets/sass/base';

.toggleLightMode {
	z-index: 50;
	position: absolute;
	right: 10%;
	top: 8rem;
	transform: translateX(10%);
	background: none;
	border: none;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;

	cursor: pointer;
	@media only screen and(max-width:$vp-8) {
		right: 5%;
	}
	svg {
		width: 2.5rem;
		height: 2.5rem;
		transition: transform 200ms ease;
	}
	svg:hover {
		transform: scale(1.1);
	}
}
</style>
