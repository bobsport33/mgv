import React from "react";
import styled from "@emotion/styled";

import { media } from "@/styles/breakpoints";

interface Award {
	imageUrl: string;
	imageAlt: string;
	title?: string;
	recepiant?: string;
	organization?: string;
}

interface AwardCardsProps {
	title: string;
	awards: Award[];
}

const Awards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #c6b0b6;
	background: radial-gradient(
		circle,
		rgba(198, 176, 182, 1) 0%,
		rgba(215, 213, 209, 1) 100%
	);
	padding: 50px 36px;
	gap: 36px;

	${media.tablet} {
		gap: 30px;
	}

	.awards {
		&__title {
		}

		&__grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 36px;

			${media.tablet} {
				gap: 30px;
			}
		}

		&__card {
			background-color: var(--neutral-100);
			border-radius: 10px;
			box-shadow: var(--shadow-medium);
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 16px;

			&__img {
				width: auto;
				height: 120px;
				object-fit: contain;
				background-color: transparent;
			}

			&__textContainer {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 4px;
			}

			&__text {
				margin: 0;
				font-size: var(--body-large);
				color: var(--neutral-1000);
				text-align: center;
				line-height: 1.35;
			}
		}
	}
`;

const AwardCards = ({ title, awards }: AwardCardsProps) => {
	return (
		<Awards>
			<h3 className="awards__title">{title}</h3>
			<div className="awards__grid">
				{awards &&
					awards.map((award, index) => {
						return (
							<div
								className="awards__card"
								key={`${award.title ?? award.imageAlt}-${index}`}
							>
								<img
									src={award.imageUrl}
									alt={award.imageAlt}
									className="awards__card__img"
								/>
								<div className="awards__card__textContainer">
									{award.title && (
										<p className="awards__card__text">
											{award.title}
										</p>
									)}
									{award.recepiant && (
										<p className="awards__card__text">
											{award.recepiant}
										</p>
									)}
									{award.organization && (
										<p className="awards__card__text">
											{award.organization}
										</p>
									)}
								</div>
							</div>
						);
					})}
			</div>
		</Awards>
	);
};

export default AwardCards;
