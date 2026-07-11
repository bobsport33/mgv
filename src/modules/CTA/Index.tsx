import React from "react";
import styled from "@emotion/styled";
import Button from "@/components/Button/Index";

import { media } from "@/styles/breakpoints";

interface CTAProps {
	title: string;
	href: string;
	buttonText: string;
	imageUrl: string;
	imageAlt: string;
}

const CTAContainer = styled.section`
	height: 380px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--padding);
	position: relative;
	background-color: var(--neutral-200);
	background: linear-gradient(
		180deg,
		rgba(193, 191, 188, 1) 0%,
		rgba(237, 235, 231, 1) 100%
	);

	${media.tablet} {
		height: fit-content;
		flex-direction: column;
		gap: 30px;
	}

	.cta {
		&__background {
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			/* z-index: -1; */
			background-color: var(--secondary-500);
			clip-path: polygon(50% 0%, 86% 0, 62% 100%, 0 100%, 0 0);
			box-shadow: var(--shadow-large);

			${media.tablet} {
				clip-path: polygon(50% 0%, 100% 0, 70% 100%, 0 100%, 0 0);
			}
		}

		&__textContainer {
			width: 60%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 25px;
			z-index: 2;
			padding: 36px;
		}
		&__title {
			text-align: center;
			width: fit-content;
			font-size: 4.0625rem;
			font-weight: 400;
			color: var(--neutral-100);
		}

		&__img {
			height: 310px;
			width: 475px;
			aspect-ratio: 95 / 62;
			object-fit: cover;
			background-color: var(--neutral-300);
			margin-right: 36px;
			box-shadow: var(--shadow-large);
			z-index: 2;

			${media.tablet} {
				margin-right: 0;
				width: 75%;
				height: auto;
			}

			${media.mobile} {
				width: 85%;
			}
		}
	}
`;

const CTA = ({ title, href, buttonText, imageUrl, imageAlt }: CTAProps) => {
	return (
		<CTAContainer>
			<div className="cta__background"></div>
			<div className="cta__textContainer">
				<h3 className="cta__title">{title}</h3>
				<Button text={buttonText} href={href} theme="neutral" />
			</div>

			<img src={imageUrl} alt={imageAlt} className="cta__img" />
		</CTAContainer>
	);
};

export default CTA;
