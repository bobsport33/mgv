import React from "react";
import styled from "@emotion/styled";

import Logo from "@/svgs/Frame 23.svg";

const HeroContainer = styled.div`
	height: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background:
		linear-gradient(
			180deg,
			rgba(217, 217, 217, 0.55) 0%,
			rgba(198, 176, 182, 0.7) 100%
		),
		url("/images/LasalleStreet.png");

	background-size: cover;
	background-position: center 70%;
	background-repeat: no-repeat;

	.hero {
		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
			transform: translateY(-60px);
		}
		&__logo {
			height: 182px;
			width: auto;
		}

		&__textContainer {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
		}
	}
`;
const Hero = () => {
	return (
		<HeroContainer>
			<div className="hero__container">
				<div className="hero__logo">
					<Logo />
				</div>
				<div className="hero__textContainer">
					<h1 className="hero__heaading">
						Mammas Goldberg Vanderporten
					</h1>
					<h2 className="hero__subheading">
						Chicago&apos;s Boutique Family Law Firm
					</h2>
				</div>
			</div>
		</HeroContainer>
	);
};

export default Hero;
