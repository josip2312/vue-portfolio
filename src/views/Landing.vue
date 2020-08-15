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
	background-color: $primary;
}
#work {
	background-color: $secondary;
	padding: 7.5rem 0;
}
#skills {
	padding: 7.5rem 0;
	background-color: $primary;
}
#contact {
	padding: 7.5rem 0;
	background-color: $secondary;
}
</style>
