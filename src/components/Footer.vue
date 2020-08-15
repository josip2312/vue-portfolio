<template>
	<footer class="footer">
		<div class="footer-social">
			<img src="../assets/images/icons/github.svg" alt="" />
			<img src="../assets/images/icons/ig.svg" alt="" />
			<img src="../assets/images/icons/linkedin.svg" alt="" />
		</div>
		<div class="footer-copyright">
			Developed and designed by Josip Ivancic &copy;
			<!-- <span>
				Icons made by
			</span>
			<a
				href="https://www.flaticon.com/authors/dinosoftlabs"
				title="DinosoftLabs"
				>DinosoftLabs</a
			>
			<span>
				from
			</span>
			<a href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com</a
			> -->
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
	background-color: $primary-dark;
}
.footer-social {
	flex: 1;
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
	color: $font-secondary;
	flex: 1;
}
</style>
