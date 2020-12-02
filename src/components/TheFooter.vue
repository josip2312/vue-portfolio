<template>
	<footer class="footer">
		<div class="footer-social">
			<a href="https://github.com/josip2312" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path
						fill="var(--font-paragraph)"
						d="M12 0a12 12 0 00-3.8 23.39c.6.1.8-.26.8-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.09-.72.09-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.94 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.33 3.3 1.23a11.5 11.5 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17a4.63 4.63 0 011.24 3.22c0 4.61-2.81 5.63-5.48 5.92.43.38.82 1.1.82 2.23v3.29c0 .32.2.7.8.58A12 12 0 0012 0z"
					/>
				</svg>
			</a>
			<!-- <a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path
						fill="var(--font-paragraph)"
						d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07a83 83 0 01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92A82.98 82.98 0 012.16 12a84 84 0 01.07-4.85c.15-3.23 1.67-4.77 4.92-4.92A84.4 84.4 0 0112 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05A84.29 84.29 0 000 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07A84.33 84.33 0 0012 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.89 1.44 1.44 0 000-2.89z"
					/>
				</svg>
			</a> -->
			<a
				href="https://www.linkedin.com/in/josip-ivancic-b3521a1b4/"
				target="_blank"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path
						fill="var(--font-paragraph)"
						d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.98 0H8.01v16h4.97v-8.4c0-4.67 6.03-5.05 6.03 0V24H24V13.87c0-7.88-8.92-7.6-11.02-3.71V8z"
					/>
				</svg>
			</a>
		</div>
		<div class="footer-copyright">
			Developed and designed by Josip Ivancic &copy;
		</div>
	</footer>
</template>



<style lang="scss" scoped>
.footer {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 25vh;
	padding: 2.5rem 0;
	background-color: var(--primary-500);
	@include mq-max($v-6) {
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
	color: var(--font-paragraph);
	flex: 1;
}
</style>
