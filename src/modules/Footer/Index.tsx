import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import MGVLogo from "@/svgs/mgvLogo.svg";
import FacebookLogo from "@/svgs/facebook.svg";
import LinkedinLogo from "@/svgs/linkedin.svg";
import { media } from "@/styles/breakpoints";

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		180deg,
		rgba(237, 235, 231, 1) 0%,
		rgba(215, 213, 209, 1) 100%
	);
	padding: 60px 0 0;

	${media.tablet} {
		padding: 40px 0 0;
	}

	.footer {
		&__content {
			width: 90%;
			max-width: 1600px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 30px;
			font-size: var(--body-large);

			${media.tablet} {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-template-areas:
					"logo logo"
					"contact links"
					"socials socials";
				gap: 10px;
				align-items: start;
			}

			/* Adjust if your breakpoints file exposes something like media.mobile */
			@media (max-width: 480px) {
				grid-template-columns: 1fr;
				grid-template-areas:
					"logo"
					"contact"
					"links"
					"socials";
				justify-items: center;
				text-align: center;
			}
		}

		&__logo {
			width: 300px;
			max-width: 100%;

			${media.tablet} {
				grid-area: logo;
				width: 250px;
				grid-column: 1 / 3;
				justify-self: center; /* ← this is what actually centers it */
			}

			& svg {
				height: 100%;
				width: 100%;
			}
		}

		&__contact {
			display: flex;
			flex-direction: column;
			gap: 10px;

			${media.tablet} {
				grid-area: contact;
			}
		}

		&__address {
			display: flex;
			flex-direction: column;
			position: relative;
			color: var(--neutral-1000);

			&:hover span::after {
				transform: scaleX(1);
			}

			& span {
				width: fit-content;
				position: relative;

				@media (max-width: 480px) {
					width: auto;
					margin: 0 auto;
				}

				&::after {
					content: "";
					position: absolute;
					bottom: -2px;
					left: 0;
					right: 0;
					height: 2px;
					background-color: var(--primary-500);
					transform: scaleX(0);
					transform-origin: center;
					transition: transform 0.3s ease;
				}
			}
		}

		&__phone,
		&__email {
			color: var(--neutral-1000);
		}

		&__phone-link,
		&__email-link {
			position: relative;
			color: var(--neutral-1000);

			&::after {
				content: "";
				position: absolute;
				bottom: -2px;
				left: 0;
				right: 0;
				height: 2px;
				background-color: var(--primary-500);
				transform: scaleX(0);
				transform-origin: center;
				transition: transform 0.3s ease;
			}

			&:hover::after {
				transform: scaleX(1);
			}
		}

		&__links {
			display: flex;
			flex-direction: column;
			gap: 20px;

			${media.tablet} {
				grid-area: links;
				align-items: flex-end;
			}

			@media (max-width: 480px) {
				align-items: center;
			}
		}

		&__link {
			font-size: var(--body-medium);
			color: var(--primary-500);
			position: relative;
			width: fit-content;

			&--active {
				color: var(--secondary-500);
			}

			&::after {
				content: "";
				position: absolute;
				bottom: -2px;
				left: 0;
				right: 0;
				height: 2px;
				background-color: var(--primary-500);
				transform: scaleX(0);
				transform-origin: center;
				transition: transform 0.3s ease;
			}

			&:hover::after {
				transform: scaleX(1);
			}
		}

		&__socials {
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			gap: 20px;

			${media.tablet} {
				grid-area: socials;
				justify-content: center;
			}
		}

		&__social-link {
			display: inline-flex;
			width: 48px;
			height: 48px;

			& svg {
				width: 100%;
				height: 100%;
			}
		}

		&__hr {
			height: 1px;
			width: 90%;
			max-width: 1600px;
			background-color: var(--neutral-700);
			margin-top: 40px;

			${media.tablet} {
				margin-top: 30px;
			}
		}

		&__copyright {
			text-align: center;
			font-size: var(--body-regular);
			color: var(--neutral-1000);
			padding: 15px;
		}
	}
`;

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<FooterContainer>
			<div className="footer__content">
				<div className="footer__logo">
					<MGVLogo />
				</div>
				<div className="footer__contact">
					<a
						href="https://maps.app.goo.gl/GZkAiEL4cbAJcv3T8"
						target="_blank"
						className="footer__address"
					>
						<span>211 W Wacker Drive</span>
						<span>Chicago, Illinois, 60606</span>
					</a>
					<div className="footer__phone">
						<strong>Phone: </strong>
						<a
							className="footer__phone-link"
							href="tel:+13126301111"
						>
							312-630-1111
						</a>
					</div>
					<div className="footer__email">
						<strong>Email: </strong>
						<a
							className="footer__email-link"
							href="mailto:contact@mgvlaw.com?subject=Inquiry"
						>
							contact@mgvlaw.com
						</a>
					</div>
				</div>
				<div className="footer__links">
					<Link className="footer__link" href={"/services"}>
						Services
					</Link>
					<Link className="footer__link" href={"/about"}>
						About
					</Link>
					<Link className="footer__link" href={"/contact"}>
						Contact
					</Link>
					<Link className="footer__link" href={"/client-portal"}>
						Client Portal
					</Link>
				</div>
				<div className="footer__socials">
					<a
						href="https://www.facebook.com/mammasgoldberg/"
						target="_blank"
						className="footer__social-link"
					>
						<FacebookLogo />
					</a>
					<a href="#" target="_blank" className="footer__social-link">
						<LinkedinLogo />
					</a>
				</div>
			</div>
			<div className="footer__hr"></div>
			<div className="footer__copyright">
				Copyright {year} Mammas Goldberg Vanderporten Law. All Rights
				Reserved.
			</div>
		</FooterContainer>
	);
};

export default Footer;
