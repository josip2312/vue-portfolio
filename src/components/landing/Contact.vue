<template>
	<div class="contact">
		<div class="contact-left" v-scrollanimation>
			<div class="contact-left-top">
				<h3 class="heading-3">Get in touch</h3>
				<div class="message">Send me a message</div>
			</div>

			<div class="contact-left-bottom">
				<div class="phone">
					<img src="@/assets/images/icons/phone.svg" alt="" />
					<span>
						00387-63-073-747
					</span>
				</div>
				<div class="email">
					<img src="@/assets/images/icons/contact2.svg" alt="" />
					<span>
						josip.ivancic23@gmail.com
					</span>
				</div>
			</div>
		</div>
		<div class="contact-right" v-scrollanimation>
			<form class="form">
				<div class="form-top">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="10"
						rows="6"
					></textarea>
				</div>
				<div class="form-group">
					<button class="btn">
						<span>Send</span
						><img src="@/assets/images/icons/send.svg" alt="" />
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
	width: 80%;
	max-width: 120rem;
	margin: 0 auto;
	background-color: $secondary;

	display: flex;
	align-items: stretch;
	justify-content: space-between;
	@media only screen and(max-width:$vp-8) {
		width: 90%;
		flex-direction: column;
	}
}

.contact-left {
	flex: 1;
	display: flex;
	flex-direction: column;
	@media only screen and(max-width:$vp-8) {
		flex-direction: row;
		padding-bottom: 5rem;
	}

	@media only screen and(max-width:$vp-6) {
		flex-direction: column;
	}
	.heading-3 {
		margin-bottom: 1rem;
	}
	.message {
		color: $font-secondary;
	}
	&-top {
		flex: 1;
		@media only screen and(max-width:$vp-6) {
			margin-bottom: 2rem;
		}
	}
	&-bottom {
		color: $font-secondary;
	}

	.phone,
	.email {
		display: flex;
		align-items: center;
		font-family: 'Lato', sans-serif;

		img {
			width: 2.5rem;
			height: 2.5rem;
			margin-right: 1rem;
		}
	}
	.phone {
		margin-bottom: 1rem;
	}
}

.contact-right {
	flex: 1;

	.form {
		display: flex;
		flex-direction: column;
		//align-items: flex-end;
		justify-content: flex-start;
		width: 100%;

		.form-top {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.form-group {
				width: 45%;
			}
		}
		.form-group {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			label {
				text-transform: uppercase;
				letter-spacing: 1px;
				color: $font-secondary;
				margin-bottom: 1rem;
			}
			input {
				font-family: 'Raleway', sans-serif;
				font-size: 1.6rem;
				color: $font-secondary;
				padding: 1rem 1rem;
				width: 100%;
				border-radius: 3px;
				border: none;
				background-color: $primary;
				transition: all 0.2s ease-out;
				margin-bottom: 1.5rem;
			}
			textarea {
				font-size: 1.6rem;
				border-radius: 3px;
				color: #0d0d0d;
				background-color: $primary;
				border: none;
				padding: 1rem;
				width: 100%;
				margin-bottom: 1.5rem;
			}

			input:focus,
			textarea:focus {
				outline: 1px solid #717388;
			}
		}
		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50%;
			max-width: 15rem;
			img {
				width: 2rem;
				height: 2rem;
				margin-left: 0.5rem;
			}
		}
	}
}
</style>
