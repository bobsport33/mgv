import React from "react";
import styled from "@emotion/styled";
import Button from "@/components/Button/Index";

import { media } from "@/styles/breakpoints";

interface CTAProps {
	title: string;
	description?: string;
	href: string;
	buttonText: string;
	imageUrl?: string;
	imageAlt?: string;
	theme?: "primary" | "secondary" | "tertiary";
}

const themeColors = {
	primary: "var(--primary-500)",
	secondary: "var(--secondary-500)",
	tertiary: "var(--tertiary-500)"
};

const buttonThemes = {
	primary: "surface-primary",
	secondary: "surface-secondary",
	tertiary: "primary"
} as const;

const CTAContainer = styled.section<{
	accent: string;
	textColor: string;
	noImage: boolean;
}>`
	height: 380px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--padding);
	position: relative;

	background: ${({ noImage }) =>
		noImage
			? `linear-gradient(
				180deg,
				rgba(170, 168, 165, 1) 0%,
				rgba(237, 235, 231, 1) 100%
			)`
			: `linear-gradient(
				180deg,
				rgba(193, 191, 188, 1) 0%,
				rgba(237, 235, 231, 1) 100%
			)`};

	${media.tablet} {
		height: fit-content;
		flex-direction: column;
		gap: 30px;
	}

	${media.mobile} {
		padding: 24px 0;
	}

	&.cta--noImage {
		.cta__textContainer {
			width: min(700px, 70%);
			margin: 0 auto;

			${media.tablet} {
				width: 80%;
			}
			${media.mobile} {
				width: 95%;
			}
		}

		.cta__background {
			clip-path: polygon(50% 0%, 100% 0, 85% 100%, 15% 100%, 0 0);

			${media.tablet} {
				clip-path: none;
			}
		}
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
			background-color: ${({ accent }) => accent};
			clip-path: polygon(50% 0%, 86% 0, 62% 100%, 0 100%, 0 0);
			box-shadow: var(--shadow-large);

			${media.tablet} {
				clip-path: polygon(50% 0%, 100% 0, 70% 100%, 0 100%, 0 0);
			}

			${media.mobile} {
				clip-path: none;
			}
		}

		&__textContainer {
			width: 60%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 25px;
			padding: 36px;
			z-index: 2;

			${media.mobile} {
				padding: 0;
			}
		}

		&__title {
			text-align: center;
			width: fit-content;
			font-size: 4.0625rem;
			font-weight: 400;
			color: ${({ textColor }) => textColor};

			${media.tablet} {
				font-size: 3.25rem;
			}
		}

		&__description {
			text-align: center;
			width: fit-content;
			font-size: var(--body-large);
			font-weight: 400;
			color: ${({ textColor }) => textColor};
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

const CTA = ({
	title,
	theme = "primary",
	description,
	href,
	buttonText,
	imageUrl,
	imageAlt
}: CTAProps) => {
	return (
		<CTAContainer
			accent={themeColors[theme]}
			className={!imageUrl ? "cta--noImage" : ""}
			noImage={!imageUrl}
			textColor={
				theme === "tertiary"
					? "var(--primary-500)"
					: "var(--neutral-100)"
			}
		>
			<div className="cta__background"></div>
			<div className="cta__textContainer">
				<h3 className="cta__title">{title}</h3>
				{description && (
					<p className="cta__description">{description}</p>
				)}
				<Button
					text={buttonText}
					href={href}
					theme={buttonThemes[theme]}
				/>
			</div>

			{imageUrl && imageAlt && (
				<img src={imageUrl} alt={imageAlt} className="cta__img" />
			)}
		</CTAContainer>
	);
};

export default CTA;
