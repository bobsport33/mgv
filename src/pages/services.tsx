import styled from "@emotion/styled";
import Head from "next/head";

import ServicesHero from "@/modules/Services/ServicesHero";
import ServicesList from "@/modules/Services/ServicesList";
import CTA from "@/modules/CTA/Index";

const ServicesContainer = styled.section`
	background: #edebe7;
	background: linear-gradient(
		180deg,
		rgba(237, 235, 231, 1) 25%,
		rgba(172, 169, 166, 1) 100%
	);
	.services__content {
		overflow: hidden;
		width: 100%;
	}
`;

export default function Services() {
	return (
		<>
			<Head>
				<title>
					Family Law Services | Mammas Goldberg Vanderporten
				</title>
				<meta
					name="description"
					content="MGV offers comprehensive family law services in Chicago: from divorce and prenuptial agreements to DCFS appeals, mediation, and parental relocation. Boutique counsel for every matter."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ServicesContainer>
				<div className="services__content">
					<ServicesHero />
					<ServicesList />
				</div>
				<CTA
					title="Schedule a consultation"
					description="We're here to listen, understand what you're facing, and help you find the clearest path forward."
					href="/contact"
					buttonText="Contact Us"
					theme="tertiary"
				/>
			</ServicesContainer>
		</>
	);
}
