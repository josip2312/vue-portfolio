<template>
	<div id="app">
		<TheHeader />

		<div class="wrap">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</div>

		<TheFooter />
	</div>
</template>


<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
	name: "App",
	components: {
		TheHeader,
		TheFooter,
	},
	mounted() {
		AOS.init({
			offset: 100,
			duration: 600,
			easing: "ease-out-sine",
			delay: 100,
		});
	},
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
.wrap {
	min-height: 100vh;
	background-color: var(--primary-400);
	position: relative;
}
@font-face {
	font-family: "Vegan Style";
	src: local("vegan"), url("./assets/fonts/vegan.ttf") format("truetype");
}
</style>
