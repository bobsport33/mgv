import React from "react";
import styled from "@emotion/styled";

const ServicesHeroContainer = styled.div`
	padding: 64px 36px 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	text-align: center;

	.services {
		&__heading {
			color: var(--neutral-1000);
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: var(--neutral-800);
			max-width: 900px;
		}
	}
`;

const ServicesHero = () => {
	return (
		<ServicesHeroContainer>
			<h1 className="services__heading">MGV Family Law Services</h1>
			<p className="services__intro">
				Mammas Goldberg Vanderporten specializes in family law and
				domestic relations–from divorce and prenuptial agreements to
				parental responsibilities and beyond. As a boutique practice, we
				bring the same level of care and attention to every matter we
				handle, including:
			</p>
		</ServicesHeroContainer>
	);
};

export default ServicesHero;
