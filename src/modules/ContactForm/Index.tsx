// Contact.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";

import { media } from "@/styles/breakpoints";
import Button from "@/components/Button/Index";

// ── Zod Schema ──
const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	phone: z.string(),
	message: z.string().min(1, "Message is required")
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Styled Wrapper ──
const ContactWrapper = styled.section`
	padding: 56px 36px;
	background-color: var(--primary-700);

	& .contact {
		/* ── Inner Layout ── */
		&__inner {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 56px;
			align-items: start;
			max-width: 1200px;
			margin: 0 auto;

			${media.tablet} {
				grid-template-columns: 1fr;
				gap: 40px;
				max-width: 700px;
			}
		}

		/* ── Copy ── */
		&__copy {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
			position: sticky;
			top: 2rem;

			${media.tablet} {
				position: static;
			}
		}

		&__heading {
			font-family: var(--font-bodoni);
			font-size: clamp(2rem, 3vw, 2.75rem);
			font-weight: 400;
			color: var(--neutral-100);

			&::after {
				content: "";
				display: block;
				width: 50px;
				height: 2px;
				margin-top: 16px;
				background-color: var(--secondary-500);
			}

			${media.mobile} {
				font-size: 2rem;
			}
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.65;
			color: rgba(237, 235, 231, 0.8);
		}

		&__body {
			font-size: 0.95rem;
			line-height: 1.75;
			color: rgba(237, 235, 231, 0.7);
		}

		/* ── Form Wrapper ── */
		&__formWrapper {
			padding: 1rem 0 1rem 3rem;
			border-left: 1px solid rgba(237, 235, 231, 0.2);

			${media.tablet} {
				padding: 1.5rem 0 0;
				border-left: none;
				border-top: 1px solid rgba(237, 235, 231, 0.25);
			}
		}

		&__detail {
			padding: 1.25rem 0;
		}

		&__label {
			display: block;
			margin-bottom: 0.5rem;

			font-size: 0.75rem;
			letter-spacing: 0.18em;
			text-transform: uppercase;

			color: var(--secondary-500);
		}

		&__required {
			color: var(--secondary-500);
		}

		&__optional {
			font-size: 0.75rem;
			color: rgba(237, 235, 231, 0.6);
			text-transform: none;
			letter-spacing: 0;
		}

		/* ── Contact Details ── */
		&__value {
			&--phone {
				font-family: var(--font-bodoni);
				font-size: 1.75rem;
				letter-spacing: 0.03em;
				color: var(--neutral-100);
				position: relative;

				&::after {
					content: "";
					position: absolute;
					bottom: -4px;
					left: 0;
					right: 0;
					height: 2px;
					background-color: var(--secondary-500);
					transform: scaleX(0);
					transform-origin: center;
					transition: transform 0.3s ease;
				}

				&:hover::after {
					transform: scaleX(1);
				}
			}
		}

		&__person {
			& + .contact__person {
				margin-top: 1.25rem;
			}

			h4 {
				margin-bottom: 0.35rem;
				font-weight: 400;
				color: var(--neutral-100);
			}

			a {
				color: rgba(237, 235, 231, 0.8);
				transition: color 0.25s ease;
				position: relative;

				&::after {
					content: "";
					position: absolute;
					bottom: -4px;
					left: 0;
					right: 0;
					height: 2px;
					background-color: var(--secondary-500);
					transform: scaleX(0);
					transform-origin: center;
					transition: transform 0.3s ease;
				}

				&:hover {
					color: var(--neutral-100);

					&::after {
						transform: scaleX(1);
					}
				}
			}
		}
		/* ── Form ── */
		&__form {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
		}

		&__field {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}

		&__input,
		&__textarea {
			font-size: 0.9rem;
			color: var(--neutral-100);
			background: transparent;
			border: none;
			border-bottom: 1px solid rgba(237, 235, 231, 0.35);
			border-radius: 0;
			padding: 0.65rem 0;
			transition: border-color 0.2s ease;
			width: 100%;
			outline: none;

			&::placeholder {
				color: rgba(237, 235, 231, 0.5);
			}

			&:focus {
				border-color: var(--secondary-500);
			}

			${media.mobile} {
				font-size: 1rem;
				padding: 0.75rem 0;
			}
		}

		&__textarea {
			resize: vertical;
			min-height: 110px;
		}

		/* ── Errors ── */
		&__input,
		&__textarea {
			&--error {
				border-color: var(--tertiary-500);

				&:focus {
					border-color: var(--tertiary-400);
				}
			}
		}

		&__errorMessage {
			font-size: 0.78rem;
			color: var(--tertiary-300);
			margin-top: 0.15rem;
		}

		/* ── Submit ── */
		&__submitWrapper {
			display: flex;
			justify-content: flex-start;
			padding-top: 0.5rem;
		}

		/* ── Success ── */
		&__successMessage {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 1.25rem;
			padding: 1.5rem;
			min-height: 220px;
		}

		&__successIcon {
			font-size: 3rem;
		}

		&__successHeading {
			font-size: 1.5rem;
			color: var(--neutral-100);
			letter-spacing: 0.03em;
		}

		&__successBody {
			font-size: 0.95rem;
			line-height: 1.75;
			color: rgba(237, 235, 231, 0.8);
			max-width: 320px;
		}
	}
`;

// ── Component ──
const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema)
	});

	const formatPhoneNumber = (value: string) => {
		const numbers = value.replace(/\D/g, "").slice(0, 10);

		if (numbers.length === 0) return "";
		if (numbers.length < 4) return `(${numbers}`;
		if (numbers.length < 7)
			return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

		return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
	};

	const onSubmit = async (data: ContactFormData) => {
		try {
			const res = await fetch("/.netlify/functions/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			});

			if (!res.ok) {
				throw new Error("Failed to send message");
			}

			setSubmitted(true);
			reset();
		} catch (error) {
			console.error(error);
			alert("Something went wrong. Please try again.");
		}
	};

	return (
		<ContactWrapper className="section contact" id="contact">
			<div className="contact__inner">
				{/* ── Left: Copy ── */}
				<div className="contact__copy">
					<h3 className="contact__heading">
						Every case begins with a conversation.
					</h3>
					<p className="contact__intro">
						Reach out to Caidi or Evan directly—we&apos;re here to
						listen, guide, and help you move forward.
					</p>
					<div className="contact__details">
						<div className="contact__detail">
							<span className="contact__label">Main Office</span>

							<a
								className="contact__value contact__value--phone"
								href="tel:+13126301111"
							>
								(312) 630-1111
							</a>
						</div>

						<div className="contact__detail">
							<span className="contact__label">Attorneys</span>

							<div className="contact__person">
								<h4>Caidi Mammas Vanderporten</h4>
								<a href="mailto:cmvanderporten@mgv-lawfirm.com">
									cmvanderporten@mgv-lawfirm.com
								</a>
							</div>

							<div className="contact__person">
								<h4>Evan Mammas</h4>
								<a href="mailto:emammas@mgv-lawfirm.com">
									emammas@mgv-lawfirm.com
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* ── Right: Form or Success ── */}
				<div className="contact__formWrapper">
					{submitted ? (
						<div className="contact__successMessage">
							<span className="contact__successIcon">✌️</span>
							<h3 className="contact__successHeading">
								Message sent!
							</h3>
							<p className="contact__successBody">
								Thanks for reaching out! I&apos;ll be in touch
								soon.
							</p>
						</div>
					) : (
						<form
							className="contact__form"
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							{/* Name */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="name"
								>
									Name{" "}
									<span className="contact__required">*</span>
								</label>
								<input
									id="name"
									type="text"
									aria-invalid={!!errors.name}
									className={`contact__input${errors.name ? " contact__input--error" : ""}`}
									placeholder="Your name"
									{...register("name")}
								/>
								{errors.name && (
									<p className="contact__errorMessage">
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="email"
								>
									Email{" "}
									<span className="contact__required">*</span>
								</label>
								<input
									id="email"
									type="email"
									aria-invalid={!!errors.email}
									className={`contact__input${errors.email ? " contact__input--error" : ""}`}
									placeholder="your@email.com"
									{...register("email")}
								/>
								{errors.email && (
									<p className="contact__errorMessage">
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Phone */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="phone"
								>
									Phone
								</label>
								<input
									id="phone"
									type="tel"
									aria-invalid={!!errors.phone}
									className="contact__input"
									placeholder="(312) 630-1111"
									{...register("phone", {
										onChange: (e) => {
											e.target.value = formatPhoneNumber(
												e.target.value
											);
										}
									})}
								/>
							</div>

							{/* Message */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="message"
								>
									Briefly describe your matter{" "}
									<span className="contact__required">*</span>
								</label>
								<textarea
									id="message"
									aria-invalid={!!errors.message}
									className={`contact__textarea${errors.message ? " contact__textarea--error" : ""}`}
									placeholder="Please provide a brief description of your matter."
									rows={5}
									{...register("message")}
								/>
								{errors.message && (
									<p className="contact__errorMessage">
										{errors.message.message}
									</p>
								)}
							</div>

							{/* Submit */}
							<div className="contact__submitWrapper">
								<Button
									text={
										isSubmitting
											? "Sending..."
											: "Get in touch"
									}
									theme="surface-primary"
									disabled={isSubmitting}
									onClick={() => console.log("click")}
								></Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</ContactWrapper>
	);
};

export default ContactForm;
