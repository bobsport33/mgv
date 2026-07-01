import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Logo from "@/svgs/mgv_simple_logo 1.svg";

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

		&__rightContainer {
			margin-right: 36px;
			display: flex;
			justify-content: flex-end;
			gap: 50px;
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
			<Link href={"/"}>
				<Logo />
			</Link>

			<div className="header__rightContainer">
				<Link className="header__link" href={"/services"}>
					Services
				</Link>
				<Link className="header__link" href={"/about"}>
					About
				</Link>
				<Link className="header__link" href={"/contact"}>
					Contact
				</Link>
				<Link className="header__link" href={"/client-portal"}>
					Client Portal
				</Link>
			</div>
		</HeaderContainer>
	);
};

export default Header;
