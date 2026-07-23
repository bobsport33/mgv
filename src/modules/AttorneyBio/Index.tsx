import { media } from "@/styles/breakpoints";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface AttorneyBioProps {
	name: string;
	title: string;
	image: string;
	children: ReactNode;
}

const AttorneyBioWrapper = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 1440px;
	margin: 0 auto;

	${media.tablet} {
		max-width: 100%;
	}

	.attorneyBio {
		&__profile {
			display: flex;
			align-items: center;
			gap: 40px;
			padding-bottom: 40px;
			border-bottom: 3px solid var(--secondary-500);
			margin-bottom: 32px;

			${media.tablet} {
				padding-bottom: 36px;
				margin-bottom: 24px;
			}

			@media screen and (max-width: 635px) {
				flex-direction: column;
				align-items: flex-start;
				padding-bottom: 24px;
				gap: 20px;
			}
		}

		&__imageWrapper {
			flex-shrink: 0;
			width: 170px;
			aspect-ratio: 3 / 4;
			border-radius: 12px;
			overflow: hidden;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

			${media.mobile} {
				width: 130px;
			}
		}

		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__identity {
			display: flex;
			flex-direction: column;
			gap: 6px;
			min-width: 0;
			width: 100%;
		}

		&__name {
			font-size: 3.5rem;
			font-weight: 700;
			color: var(--neutral-900);
			margin: 0;
			line-height: 1.1;
			overflow-wrap: anywhere;

			${media.mobile} {
				font-size: 2rem;
			}
		}

		&__title {
			font-size: 1.7rem;
			color: var(--secondary-500);
			font-weight: 500;
			margin: 0;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			line-height: 1.2;

			${media.mobile} {
				font-size: 1.2rem;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			gap: 26px;
			color: var(--neutral-700);
			line-height: 1.7;

			p {
				margin: 0;
				font-size: var(--body-medium);
			}
		}
	}
`;

const AttorneyBio = ({ name, title, image, children }: AttorneyBioProps) => {
	return (
		<AttorneyBioWrapper>
			<div className="attorneyBio__profile">
				<div className="attorneyBio__imageWrapper">
					<img
						className="attorneyBio__image"
						src={image}
						alt={name}
					/>
				</div>
				<div className="attorneyBio__identity">
					<h1 className="attorneyBio__name">{name}</h1>
					<p className="attorneyBio__title">{title}</p>
				</div>
			</div>

			<div className="attorneyBio__content">{children}</div>
		</AttorneyBioWrapper>
	);
};

export default AttorneyBio;
