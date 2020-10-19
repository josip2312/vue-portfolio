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
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheFooter,
	},
};
</script>

<style lang="scss">
.wrap {
	min-height: 90vh;
	background-color: var(--primary);
}
@import 'assets/sass/base';
</style>
