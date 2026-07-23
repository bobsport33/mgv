import React from "react";
import styled from "@emotion/styled";
import { media } from "@/styles/breakpoints";

const ServicesHeroContainer = styled.div`
	padding: 64px 36px 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	text-align: center;

	${media.tablet} {
		padding: 36px;
	}

	${media.mobile} {
		padding: 24px;
	}

	.services {
		&__heading {
			color: var(--neutral-1000);
			margin: 0;

			${media.tablet} {
				font-size: 3rem;
			}

			${media.mobile} {
				font-size: 2.5rem;
				line-height: 1.15;
			}
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: var(--neutral-800);
			max-width: 900px;
			margin: 0;

			${media.tablet} {
				font-size: 1.125rem;
				line-height: 1.6;
				max-width: 700px;
			}

			${media.mobile} {
				font-size: 1rem;
				line-height: 1.5;
				max-width: 100%;
			}
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
