import Image from "next/image";
import styled from "@emotion/styled";

import { Attorney } from "@/types/types";

type TeamMemberProps = {
	attorney: Attorney;
};

const TeamMemberWrapper = styled.article`
	display: flex;
	flex-direction: column;
	flex: 1 1 0;
	min-width: 0;

	background: var(--neutral-100);
	box-shadow: var(--shadow-medium);
	border-radius: 6px;
	overflow: hidden;

	.teamMember {
		&__imageWrapper {
			width: 100%;
		}

		&__image {
			position: relative;
			width: 100%;
			aspect-ratio: 3 / 4;
			overflow: hidden;
			background: var(--neutral-200);
		}

		&__photo {
			object-fit: cover;
			transition: transform 0.4s ease;
		}

		/* Content */

		&__content {
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: flex-start;
			padding: 28px 24px;
			gap: 8px;
		}

		&__name {
			margin: 0;

			font-family: var(--font-bodoni);
			font-size: clamp(1.5rem, 2vw, 2rem);
			font-weight: 400;
			line-height: 1.15;
			letter-spacing: 0.01em;
			color: var(--neutral-1000);
		}

		&__title {
			margin: 0;

			font-size: 0.95rem;
			font-weight: 600;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			color: var(--primary-500);
		}

		&__description {
			margin-top: 12px;

			font-size: var(--body-small);
			line-height: 1.7;
			color: var(--neutral-700);
		}

		&__link {
			display: inline-flex;
			align-items: center;
			gap: 6px;

			margin-top: auto;
			padding-top: 24px;

			font-size: 0.9rem;
			font-weight: 600;
			letter-spacing: 0.04em;

			color: var(--primary-500);
			text-decoration: none;

			transition: color 0.25s ease;

			& .teamMember__link--arrow {
				transition: transform 0.25s ease;
			}

			&:hover {
				color: var(--primary-700);

				& .teamMember__link--arrow {
					transform: translateX(10px);
				}
			}
		}
	}
`;

const TeamMember = ({ attorney }: TeamMemberProps) => {
	const { name, title, image, reverse = false } = attorney;

	return (
		<TeamMemberWrapper
			className={`teamMember${reverse ? " teamMember--reverse" : ""}`}
		>
			<div className="teamMember__imageWrapper">
				<div className="teamMember__image">
					<Image
						className="teamMember__photo"
						src={image}
						alt={name}
						fill
					/>
				</div>
			</div>

			<div className="teamMember__content">
				<h2 className="teamMember__name">{name}</h2>

				<p className="teamMember__title">{title}</p>

				<a className="teamMember__link" href={attorney.link}>
					Meet {name}{" "}
					<span className="teamMember__link--arrow">→</span>
				</a>
			</div>
		</TeamMemberWrapper>
	);
};

export default TeamMember;
