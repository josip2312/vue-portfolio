<template>
	<footer class="footer">
		<div class="footer-social">
			<a href="#">
				<img src="../assets/images/icons/github.svg" alt="" />
			</a>
			<a href="#">
				<img src="../assets/images/icons/ig.svg" alt="" />
			</a>
			<a href="#">
				<img src="../assets/images/icons/linkedin.svg" alt="" />
			</a>
		</div>
		<div class="footer-copyright">
			Developed and designed by Josip Ivancic &copy;
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 25vh;
	padding: 2.5rem 0;
	background-color: var(--primary-dark);
	@media only screen and(max-width:$vp-6) {
		padding-bottom: 10vh;
	}
}
.footer-social {
	flex: 1.5;
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 50%;
	max-width: 30rem;
	img {
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}
}
.footer-copyright {
	display: flex;
	align-items: center;
	color: var(--font-secondary);
	flex: 1;
}
</style>
