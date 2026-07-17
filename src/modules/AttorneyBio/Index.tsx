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
	max-width: 80%;
	margin: 0 auto;

	.attorneyBio {
		&__profile {
			display: flex;
			align-items: center;
			gap: 40px;
			padding: 40px 0;
			border-bottom: 3px solid var(--secondary-500);
			margin-bottom: 32px;
		}

		&__imageWrapper {
			flex-shrink: 0;
			width: 170px;
			aspect-ratio: 3 / 4;
			border-radius: 12px;
			overflow: hidden;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
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
		}

		&__name {
			font-size: 3.5rem;
			font-weight: 700;
			color: var(--neutral-900);
			margin: 0;
		}

		&__title {
			font-size: 1.7rem;
			color: var(--secondary-500);
			font-weight: 500;
			margin: 0;
			text-transform: uppercase;
			letter-spacing: 0.05em;
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
