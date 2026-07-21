import styled from "@emotion/styled";
import Head from "next/head";

import ServicesHero from "@/modules/Services/ServicesHero";
import ServicesList from "@/modules/Services/ServicesList";

const ServicesContainer = styled.section`
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
			</ServicesContainer>
		</>
	);
}
