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
				<title>MGV - Services</title>
				<meta
					name="description"
					content="Family law and domestic relations services offered by Mammas Goldberg Vanderporten."
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
