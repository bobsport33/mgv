import Image from "next/image";
import styled from "@emotion/styled";

import { Attorney } from "@/types/types";

type TeamMemberProps = {
	attorney: Attorney;
};

const TeamMemberWrapper = styled.article`
	display: grid;
	grid-template-columns: 420px 1fr;
	gap: 72px;
	align-items: center;

	.teamMember {
		/* ── Reverse Layout Modifier ── */

		&--reverse {
			.teamMember__image {
				order: 2;
			}

			.teamMember__content {
				order: 1;
			}
		}

		/* ── Image ── */

		&__imageWrapper {
			display: flex;
			justify-content: center;
		}

		&__image {
			position: relative;
			width: 100%;
			max-width: 420px;
			aspect-ratio: 3 / 4;
			overflow: hidden;
			background-color: var(--neutral-200);
			box-shadow: var(--shadow-medium);
		}

		&__photo {
			object-fit: cover;
		}

		/* ── Content ── */

		&__content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 18px;
		}

		&__name {
			font-family: var(--font-bodoni);
			font-size: clamp(2.25rem, 4vw, 3.5rem);
			font-weight: 400;
			line-height: 1.1;
			color: var(--neutral-1000);
			text-transform: uppercase;
			letter-spacing: 0.02em;
		}

		&__title {
			font-size: 1.1rem;
			color: var(--primary-500);
			letter-spacing: 0.08em;
			text-transform: uppercase;
		}

		&__description {
			max-width: 500px;
			font-size: var(--body-medium);
			line-height: 1.75;
			color: var(--neutral-700);
			margin-top: 12px;
		}

		/* ── Link ── */

		&__link {
			display: inline-flex;
			align-items: center;
			margin-top: 18px;

			font-size: 0.85rem;
			letter-spacing: 0.15em;
			text-transform: uppercase;
			color: var(--neutral-1000);

			border: none;
			background: transparent;
			cursor: pointer;

			border-bottom: 1px solid var(--primary-500);
			padding: 0 0 6px;

			transition:
				color 0.25s ease,
				border-color 0.25s ease;

			&:hover {
				color: var(--primary-500);
				border-color: var(--neutral-1000);
			}
		}

		/* ── Responsive ── */

		@media (max-width: 900px) {
			grid-template-columns: 1fr;
			gap: 36px;

			&--reverse {
				.teamMember__image {
					order: initial;
				}

				.teamMember__content {
					order: initial;
				}
			}

			&__image {
				aspect-ratio: 3 / 4;
			}
		}
	}
`;

const TeamMember = ({ attorney }: TeamMemberProps) => {
	const { name, title, description, image, reverse = false } = attorney;

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

				<p className="teamMember__description">{description}</p>

				<a className="teamMember__link" href={attorney.link}>
					Meet {name} →
				</a>
			</div>
		</TeamMemberWrapper>
	);
};

export default TeamMember;
