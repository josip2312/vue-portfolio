<template>
	<div class="contact container">
		<div class="contact-left" v-scrollanimation>
			<div class="contact-left-top">
				<h3 class="heading-3">Get in touch</h3>
				<div class="message">Send me a message</div>
			</div>

			<div class="contact-left-bottom">
				<div class="phone">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="var(--font-paragraph)"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						></path>
					</svg>
					<span> 00387-63-073-747 </span>
				</div>
				<div class="email">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="var(--font-paragraph)"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						></path>
					</svg>
					<span> josip.ivancic23@gmail.com </span>
				</div>
			</div>
		</div>
		<div class="contact-right" v-scrollanimation>
			<form
				class="form"
				name="contact-form"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				@submit.prevent="handleSubmit"
			>
				<div class="form-top">
					<div class="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							v-model="form.name"
							required
							autocomplete="on"
						/>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							v-model="form.email"
							required
							autocomplete="on"
						/>
					</div>
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea
						name="message"
						id="message"
						cols="10"
						rows="6"
						v-model="form.message"
						required
						minlength="10"
						maxlength="200"
					></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-main">
						<span>Send</span>
						<img src="@/assets/icons/send.svg" alt="" />
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			form: {
				name: "",
				email: "",
				message: "",
			},
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							data[key]
						)}`
				)
				.join("&");
		},
		async handleSubmit() {
			const axiosConfig = {
				header: { "Content-Type": "application/x-www-form-urlencoded" },
			};
			try {
				await axios.post(
					"/",
					this.encode({
						"form-name": "contact-form",
						...this.form,
					}),
					axiosConfig
				);
				this.$router.push({ name: "FormSuccess" });
			} catch (error) {
				console.error(error);
				this.$router.push({ name: "FormFailure" });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.before-enter {
	opacity: 0;
	transform: translateY(4rem);
	transition: transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
		opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.enter {
	opacity: 1;
	transform: translateY(0);
}
.contact {
	display: flex;

	justify-content: space-between;
	@media only screen and(max-width:$v-9) {
		width: 90%;
		flex-direction: column;
	}
}

.contact-left {
	flex: 1;
	display: flex;
	flex-direction: column;
	@media only screen and(max-width:$v-9) {
		flex-direction: row;
		padding-bottom: 5rem;
	}

	@media only screen and(max-width:$v-6) {
		flex-direction: column;
	}
	.heading-3 {
		margin-bottom: 2rem;
	}
	.message {
		color: var(--font-paragraph);
	}
	&-top {
		flex: 1;
		@media only screen and(max-width:$v-6) {
			margin-bottom: 2rem;
		}
	}
	&-bottom {
		color: var(--font-paragraph);
	}

	.phone,
	.email {
		display: flex;
		align-items: center;
		font-weight: 500;

		svg {
			width: 3rem;
			margin-right: 1rem;
		}
	}
	.phone {
		margin-bottom: 2rem;
	}
}

.contact-right {
	flex: 1;

	.form {
		display: flex;
		flex-direction: column;
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

			label {
				text-transform: uppercase;
				letter-spacing: 2px;
				color: var(--font-paragraph);

				margin-bottom: 1rem;
			}
			input {
				color: var(--font-paragraph);

				padding: 1rem 1rem;
				width: 100%;
				border-radius: 3px;
				border: none;
				background-color: var(--primary-400);

				margin-bottom: 2rem;
			}
			textarea {
				border-radius: 3px;
				color: var(--font-paragraph);
				background-color: var(--primary-400);

				border: none;
				padding: 1rem;
				width: 100%;
				margin-bottom: 2rem;
			}
			input:focus,
			textarea:focus {
				outline: 1px solid var(--font-paragraph);
			}
		}
		.btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			max-width: 20rem;
			img {
				width: 2rem;
				height: 2rem;
				margin-left: 0.5rem;
			}
		}
	}
}
</style>
