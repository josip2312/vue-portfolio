const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('enter');
			observer.unobserve(entry.target);
			setTimeout(() => {
				entry.target.classList.remove('enter', 'before-enter');
			}, 800);
		}
	});
});

export default {
	bind(el) {
		el.classList.add(`before-enter`);
		observer.observe(el);
	},
};
