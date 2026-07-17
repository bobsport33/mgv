// Contact.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";

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
	margin: 36px;
	background-color: transparent;

	& .contact {
		/* ── Inner Layout ── */
		&__inner {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 36px;
			align-items: start;
			background-color: var(--neutral-200);
			border-radius: 10px;
			padding: 36px;
		}

		/* ── Copy ── */
		&__copy {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
			position: sticky;
			top: 2rem;
		}

		&__heading {
			font-size: clamp(1.75rem, 3vw, 2.5rem);
			color: var(--neutral-1000);
			line-height: 1.2;
			text-transform: uppercase;
			letter-spacing: 0.04em;
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: var(--neutral-800);
		}

		&__body {
			font-size: 0.95rem;
			line-height: 1.75;
			color: var(--neutral-700);
		}

		/* ── Form Wrapper ── */
		&__formWrapper {
			background-color: var(--neutral-100);
			border-radius: 8px;
			padding: 2.5rem;
			border: 1px solid var(--neutral-300);
		}

		&__detail {
			padding: 2rem 0;
		}

		&__label {
			display: block;
			margin-bottom: 0.75rem;

			font-size: 0.75rem;
			letter-spacing: 0.18em;
			text-transform: uppercase;

			color: var(--primary-500);
		}

		&__value {
			&--phone {
				font-family: var(--font-bodoni);
				font-size: 2rem;
				letter-spacing: 0.03em;
				color: var(--neutral-1000);
			}
		}

		&__person {
			& + .contact__person {
				margin-top: 1.75rem;
			}

			h4 {
				margin-bottom: 0.35rem;
				font-weight: 400;
			}

			a {
				color: var(--neutral-700);
				transition: color 0.25s ease;

				&:hover {
					color: var(--primary-500);
				}
			}
		}

		/* ── Form ── */
		&__form {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}

		/* ── Field ── */
		&__field {
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}

		/* ── Label ── */
		&__label {
			font-size: 0.85rem;
			letter-spacing: 0.05em;
			color: var(--neutral-900);
			/* text-transform: uppercase; */
		}

		&__required {
			color: var(--primary-500);
		}

		&__optional {
			font-size: 0.75rem;
			color: var(--neutral-600);
			text-transform: none;
			letter-spacing: 0;
		}

		/* ── Input & Textarea ── */
		&__input,
		&__textarea {
			font-size: 0.9rem;
			color: var(--neutral-900);
			background-color: var(--neutral-200);
			border: 1px solid var(--neutral-400);
			border-radius: 6px;
			padding: 0.75rem 1rem;
			transition:
				border-color 0.2s ease,
				box-shadow 0.2s ease;
			width: 100%;
			outline: none;

			&::placeholder {
				color: var(--neutral-500);
			}

			&:focus {
				border-color: var(--primary-400);
				box-shadow: 0 0 0 3px var(--primary-100);
			}
		}

		&__textarea {
			resize: vertical;
			min-height: 120px;
		}

		/* ── Error Modifier ── */
		&__input {
			&--error {
				border-color: var(--accent-500);

				&:focus {
					border-color: var(--accent-600);
					box-shadow: 0 0 0 3px var(--accent-100);
				}
			}
		}

		&__textarea {
			&--error {
				border-color: var(--accent-500);

				&:focus {
					border-color: var(--accent-600);
					box-shadow: 0 0 0 3px var(--accent-100);
				}
			}
		}

		&__errorMessage {
			font-size: 0.78rem;
			color: var(--accent-600);
			margin-top: 0.15rem;
		}

		/* ── Submit ── */
		&__submitWrapper {
			display: flex;
			justify-content: flex-end;
			padding-top: 0.5rem;
		}

		/* ── Success Message ── */
		&__successMessage {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 1.25rem;
			padding: 2rem;
			min-height: 300px;
		}

		&__successIcon {
			font-size: 3rem;
		}

		&__successHeading {
			font-size: 1.5rem;
			color: var(--neutral-1000);
			letter-spacing: 0.03em;
		}

		&__successBody {
			font-size: 0.95rem;
			line-height: 1.75;
			color: var(--neutral-700);
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
								href="tel:3126301111"
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
							<Button
								text="Send another message"
								theme="primary"
								onClick={() => setSubmitted(false)}
							/>
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
									className="contact__input"
									placeholder="Your phone number"
									{...register("phone")}
								/>
							</div>

							{/* Message */}
							<div className="contact__field">
								<label
									className="contact__label"
									htmlFor="message"
								>
									What&apos;s on your mind?{" "}
									<span className="contact__required">*</span>
								</label>
								<textarea
									id="message"
									className={`contact__textarea${errors.message ? " contact__textarea--error" : ""}`}
									placeholder="Tell me about your brand, project or idea..."
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
									theme="primary"
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
