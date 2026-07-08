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
	background: #edebe7;
	background: linear-gradient(
		180deg,
		rgba(237, 235, 231, 1) 0%,
		rgba(215, 213, 209, 1) 100%
	);

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
			}
		}
		&__logo {
			width: 300px;

			${media.tablet} {
				width: 100%;
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
				grid-column: 1 / 2;
				grid-row: 2 / 3;
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
			gap: 25px;
		}

		&__link {
			font-size: var(--body-regular);
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
			flex-direction: column;
			justify-content: cetnter;
			gap: 20px;
		}

		&__hr {
			height: 1px;
			width: 90%;
			max-width: 1600px;
			background-color: var(--neutral-700);
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
