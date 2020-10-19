<template>
	<main id="landing">
		<section id="showcase">
			<Showcase />
		</section>
		<section id="work">
			<Work />
		</section>
		<section id="skills">
			<Skills />
		</section>
		<section id="contact">
			<Contact />
		</section>
	</main>
</template>

<script>
import Showcase from '@/components/landing/Showcase';
import Work from '@/components/landing/Work';
import Skills from '@/components/landing/Skills';
import Contact from '@/components/landing/Contact';

export default {
	name: 'Landing',
	components: {
		Showcase,
		Work,
		Skills,
		Contact,
	},
};
</script>

<style lang="scss" scoped>
#showcase {
	height: 91vh;
	background-color: var(--primary);
	transition: background 300ms ease-in-out;
	@media only screen and(max-width:$vp-6) {
		height: 86vh;
	}
}
#work {
	background-color: var(--secondary);
	padding: 7.5rem 0;
	transition: background 300ms ease-in-out;
}
#skills {
	padding: 7.5rem 0;
	background-color: var(--primary);
}
#contact {
	padding: 7.5rem 0;
	background-color: var(--secondary);
}
</style>
