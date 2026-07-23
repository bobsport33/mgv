import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value = "") =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");

export const handler = async (event) => {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: "Method Not Allowed" })
		};
	}

	try {
		const { name, email, phone, message } = JSON.parse(event.body);

		if (!name || !email || !message) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					message: "Missing required fields"
				})
			};
		}

		const safeName = escapeHtml(name);
		const safeEmail = escapeHtml(email);
		const safePhone = escapeHtml(phone || "Not provided");
		const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

		const result = await resend.emails.send({
			from: "MGV Law Contact Form <hello@mgv-lawfirm.com>",
			to: ["bob@foundfablecreative.com"],
			subject: `New Contact Request from ${safeName}`,
			replyTo: email,
			html: `
				<h2>New Contact Form Submission</h2>

				<p>
					<strong>Name:</strong> ${safeName}
				</p>

				<p>
					<strong>Email:</strong> ${safeEmail}
				</p>

				<p>
					<strong>Phone:</strong> ${safePhone}
				</p>

				<hr />

				<p>
					<strong>Message:</strong>
				</p>

				<p>
					${safeMessage}
				</p>
			`
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				success: true,
				result
			})
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: 500,
			body: JSON.stringify({
				message: "Unable to send message"
			})
		};
	}
};
