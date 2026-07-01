import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const HeaderContainer = styled.header`
	height: 60px;
	width: 100%;
	background-color: var(--neutral-100);
	box-shadow: var(--shadow-medium);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	z-index: 10;

	.header {
		&__leftContainer {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex: 1;
		}

		&__logo {
			width: 263px;
			height: 189px;
			border: 1px solid var(--tertiary-500);
			background-color: var(--neutral-100);
			box-shadow: var(--shadow-medium);
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&__rightContainer {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex: 1;
		}

		&__link {
			font-size: var(--body-large);
			color: var(--primary-500);
			position: relative;

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
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<div className="header__leftContainer">
				<Link className="header__link" href={"/"}>
					Home
				</Link>
				<Link className="header__link" href={"/services"}>
					Services
				</Link>
			</div>
			<div className="header__logo">
				<Image
					src={"/images/MGV_Final_Logo_Transparent_Low.png"}
					alt="MGV Logo"
					width={230}
					height={166}
				/>
			</div>
			<div className="header__rightContainer">
				<Link className="header__link" href={"/about"}>
					About
				</Link>
				<Link className="header__link" href={"/contact"}>
					Contact
				</Link>
			</div>
		</HeaderContainer>
	);
};

export default Header;
