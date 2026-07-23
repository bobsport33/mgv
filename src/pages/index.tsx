import AwardCards from "@/modules/AwardCards/Index";
import CTA from "@/modules/CTA/Index";
import GeometricImageContent from "@/modules/GeometricImageContent/Index";
import Hero from "@/modules/Hero/Index";
import TestimonialCarousel from "@/modules/TestimonialCarousel/Index";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Mammas Goldberg Vanderporten | Chicago Family Law Firm
				</title>
				<meta
					name="description"
					content="MGV is one of Chicago's most respected boutique family law firms. For over four decades, Evan Mammas and Caidi Mammas Vanderporten have provided clear, personal, and principled legal counsel."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Hero />
				<GeometricImageContent
					title="Your Family. Your Attorney."
					subTitle="Every Step of the Way"
					description="At MGV, we've spent over four decades building one of Chicago's most respected family law practices on a simple belief: every client deserves clear guidance, honest counsel, and an attorney who is truly present for them. We take the time to understand what matters most to you, explain your options, and navigate the path forward—together."
					imageUrl="#"
					imageAlt={"#"}
				/>
				<AwardCards
					title="Professional Awards"
					awards={[
						{
							imageUrl:
								"/images/BestLawyers-removebg-preview.png",
							imageAlt: "Best Lawyers in America Logo",
							title: "Best Lawyers in America: Evan James Mammas",
							recepiant: "Expertise in Family Law",
							organization: "Issued by Best Lawyers · 2022-2026"
						},
						{
							imageUrl: "/images/best-lawyers-ones-to-watch.avif",
							imageAlt: "Best Lawyers in America Logo",
							title: "Best Lawyers, Ones to Watch: Caidi Vanderporten",
							recepiant:
								"Expertise in Family Law, Arbitration & Mediation",
							organization: "Issued by Best Lawyers · 2020-2026"
						},
						{
							imageUrl:
								"/images/BestLawyers-removebg-preview.png",
							imageAlt: "Best Lawyers in America Logo",
							title: "Best Law Firms, Chicago: Mammas Goldberg Vanderporten",
							organization: "Issued by Best Lawyers · 2022-2026"
						},
						{
							imageUrl: "/images/superlawyers-logo-2023.png",
							imageAlt: "Superlawyers Rising Star award icon",
							title: "Superlawyers, Rising Star: Caidi Vanderporten",
							organization: "Issued by Superlawyers · 2020-2026"
						}
					]}
				/>
				<TestimonialCarousel
					title="What Our Clients Are Saying"
					testimonials={[
						"Caidi and MGV Firm transformed a situation fraught with abuse and frustration into one where my family could thrive. Their ethical and loving support was instrumental, and I cannot recommend them more highly.",
						"Not only did Evan provide expert legal advice, but he also showed genuine compassion and understanding during a difficult time. His dedication and commitment to achieving the best possible outcome for me was truly commendable.",
						"I cannot recommend Mrs. Caidi Mammas Vanderporten enough. She was absolutely amazing. From day one, she provided the support and information I needed. She is ethical, honest, and knowledgeable and clearly loves the work she does.",
						"After a very complicated case, with a ton of moving parts, Caidi did an amazing job. She was very punctual, excellent at communicating, and had a fighting spirit that was ferocious, but controlled. Her ability to listen to my wishes and not be pushed around were highly appreciated.",
						"Caidi was a wonder when helping me through my divorce. She was often having to both keep everything on track and manage both the other lawyer and the mediator. Sometimes it felt like she was the only adult in the room. I'm confident that we would still be walking slowly in circles if she hadn't taken the proper initiative."
					]}
				/>
				<CTA
					title="Get In Touch"
					buttonText="Contact Us"
					imageAlt="#"
					imageUrl="#"
					href="/contact"
					theme="secondary"
				/>
			</div>
		</>
	);
}
