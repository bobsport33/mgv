import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { media } from "@/styles/breakpoints";
import Logo from "@/svgs/mgv_simple_logo 1.svg";

const HeaderContainer = styled.header`
	height: 60px;
	width: 100%;
	background-color: var(--neutral-100);
	box-shadow: var(--shadow-medium);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 36px;
	position: relative;
	z-index: 10;

	.header {
		&__nav {
			display: flex;
			align-items: center;
			gap: 50px;
		}

		&__link {
			font-size: var(--body-large);
			color: var(--primary-500);
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

				${media.tablet} {
					display: none;
				}
			}

			&:hover::after {
				transform: scaleX(1);
				${media.tablet} {
					transform: scaleX(0);
				}
			}

			&--active {
				color: var(--secondary-500);
			}
		}

		/* -------------------- HAMBURGER -------------------- */

		&__hamburger {
			display: none;
			height: 36px;
			width: 49px;
			border: 0;
			background: transparent;
			padding: 0;
			cursor: pointer;
			align-items: center;
			justify-content: center;
		}

		&__hamburgerIcon {
			height: 2px;
			width: 25.5px;
			border-radius: 20px;
			background-color: var(--primary-500);
			position: relative;
			z-index: 100;

			&::before,
			&::after {
				content: "";
				display: none;
			}
		}

		&__hamburgerBar {
			height: 2px;
			width: 25.5px;
			border-radius: 20px;
			background-color: var(--primary-500);
			position: absolute;
			left: 0;

			&--top {
				top: -6.5px;
			}

			&--bottom {
				top: 6.5px;
			}
		}

		&__hamburger--open {
			.header__hamburgerIcon {
				animation: menuOpened 1s forwards;
			}

			.header__hamburgerBar--top {
				animation: menuOpenedBefore 1s forwards;
			}

			.header__hamburgerBar--bottom {
				animation: menuOpenedAfter 1s forwards;
			}
		}

		&__hamburger--touched:not(.header__hamburger--open) {
			.header__hamburgerIcon {
				animation: menuClosed 1s forwards;
			}

			.header__hamburgerBar--top {
				animation: menuClosedBefore 1s forwards;
			}

			.header__hamburgerBar--bottom {
				animation: menuClosedAfter 1s forwards;
			}
		}

		/* -------------------- MOBILE MENU -------------------- */
		&__mobileMenu {
			position: absolute;
			top: 60px;
			left: 0;
			width: 100%;
			background-color: var(--neutral-100);
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
			padding: 32px 0;
			z-index: 1; /* sits below header content */

			transform: translateY(-120%);
			pointer-events: none;
			transition: transform 0.3s ease;

			&--open {
				transform: translateY(0);
				pointer-events: auto;
			}
		}

		${media.tablet} {
			&__hamburger {
				display: flex;
			}

			&__nav {
				display: none;
			}
		}
	}

	/* -------------------- OPEN -------------------- */

	@keyframes menuOpened {
		0% {
			transform: rotate(0);
		}

		50% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(45deg);
		}
	}

	@keyframes menuOpenedBefore {
		0% {
			top: -6px;
			transform: rotate(0);
		}

		50% {
			top: 0;
			transform: rotate(0);
		}

		100% {
			top: 0;
			transform: rotate(90deg);
		}
	}

	@keyframes menuOpenedAfter {
		0% {
			top: 5.5px;
			transform: rotate(0);
		}

		50% {
			top: 0;
			transform: rotate(0);
		}

		100% {
			top: 0;
			transform: rotate(90deg);
		}
	}

	@keyframes menuClosed {
		0% {
			transform: rotate(45deg);
		}

		50% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(0);
		}
	}

	@keyframes menuClosedBefore {
		0% {
			top: 0;
			transform: rotate(90deg);
		}

		50% {
			top: 0;
			transform: rotate(0);
		}

		100% {
			top: -6px;
			transform: rotate(0);
		}
	}

	@keyframes menuClosedAfter {
		0% {
			top: 0;
			transform: rotate(90deg);
		}

		50% {
			top: 0;
			transform: rotate(0);
		}

		100% {
			top: 5.5px;
			transform: rotate(0);
		}
	}
`;

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuTouched, setMenuTouched] = useState(false);

	useEffect(() => {
		const observer = new ResizeObserver(() => {
			if (window.innerWidth > 1100 && menuOpen) {
				setMenuOpen(false);
			}
		});

		observer.observe(document.body);

		return () => {
			observer.disconnect();
		};
	}, [menuOpen]);

	const links = [
		{ href: "/services", label: "Services" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
		{ href: "/client-portal", label: "Client Portal" }
	];

	return (
		<HeaderContainer>
			<div
				style={{
					position: "relative",
					zIndex: 2,
					display: "flex",
					alignItems: "center"
				}}
			>
				<Link href="/">
					<Logo />
				</Link>
			</div>

			<nav className="header__nav">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="header__link"
					>
						{link.label}
					</Link>
				))}
			</nav>

			<button
				className={`header__hamburger ${
					menuOpen ? "header__hamburger--open" : ""
				} ${menuTouched ? "header__hamburger--touched" : ""}`}
				onClick={() => {
					setMenuTouched(true);
					setMenuOpen((prev) => !prev);
				}}
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
			>
				<span className="header__hamburgerIcon">
					<span className="header__hamburgerBar header__hamburgerBar--top" />
					<span className="header__hamburgerBar header__hamburgerBar--bottom" />
				</span>
			</button>

			<div
				className={`header__mobileMenu ${
					menuOpen ? "header__mobileMenu--open" : ""
				}`}
			>
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="header__link"
						onClick={() => setMenuOpen(false)}
					>
						{link.label}
					</Link>
				))}
			</div>
		</HeaderContainer>
	);
};

export default Header;
