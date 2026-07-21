import ContactForm from "@/modules/ContactForm/Index";
import Head from "next/head";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact MGV | Mammas Goldberg Vanderporten</title>
				<meta
					name="description"
					content="Ready to start a conversation? Reach Caidi or Evan directly at MGV's Chicago office. Every client relationship begins with listening."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<ContactForm />
			</div>
		</>
	);
}
