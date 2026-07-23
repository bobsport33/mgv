import React from "react";
import styled from "@emotion/styled";
import { media } from "@/styles/breakpoints";

const TeamHeroContainer = styled.div`
	min-height: 450px;
	padding: 48px 36px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	text-align: center;

	background:
		linear-gradient(
			180deg,
			rgba(20, 30, 48, 0.88) 0%,
			rgba(20, 30, 48, 0.82) 100%
		),
		url("/images/city2.jpg");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;

	${media.tablet} {
		padding: 36px 24px;
		min-height: 380px;
	}

	${media.mobile} {
		padding: 24px;
		min-height: 320px;
		gap: 12px;
	}

	.team {
		&__heading {
			color: #fff;
			text-align: center;

			${media.mobile} {
				font-size: 2.25rem;
				line-height: 1.15;
			}
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: rgba(255, 255, 255, 0.9);
			max-width: 1000px;

			${media.tablet} {
				max-width: 700px;
				line-height: 1.6;
			}

			${media.mobile} {
				font-size: 1.3rem;
				line-height: 1.4;
				max-width: 100%;
			}
		}
	}
`;

const TeamHero = () => {
	return (
		<TeamHeroContainer>
			<h1 className="team__heading">Meet the MGV Team</h1>
			<p className="team__intro">
				MAMMAS GOLDBERG was founded in 1981 by Evan Mammas and Jerry
				Goldberg with a shared commitment to exceptional family law
				representation. Over four decades later, that legacy continues
				now as MAMMAS GOLDBERG VANDERPORTEN, with Caidi Mammas
				Vanderporten partnering with founder Evan Mammas.
			</p>
		</TeamHeroContainer>
	);
};

export default TeamHero;
