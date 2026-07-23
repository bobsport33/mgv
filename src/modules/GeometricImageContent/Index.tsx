import React from "react";
import styled from "@emotion/styled";

import TriangleCorner from "@/svgs/triangle_corner.svg";
import { media } from "@/styles/breakpoints";

interface ImageContentProps {
	title: string;
	subTitle: string;
	description: string;
	imageUrl: string;
	imageAlt: string;
}

const ImageContent = styled.div`
	height: 530px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 40px;

	${media.tablet} {
		height: fit-content;
		flex-direction: column;
		padding: 40px 0;
	}

	.content {
		&__background {
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: -100px;
			z-index: -1;

			& svg {
				filter: drop-shadow(var(--shadow-extra));
			}
		}

		&__image {
			width: 455px;
			height: auto;
			aspect-ratio: 4 / 3;
			background-color: #d9d9d9;
			box-shadow: var(--shadow-medium);

			${media.tablet} {
				width: 85%;
				max-width: 550px;
			}
		}

		&__textWrapper {
			width: 52%;
			display: flex;
			flex-direction: column;
			gap: 35px;
			align-items: center;

			${media.tablet} {
				width: 85%;
			}

			${media.mobile} {
				gap: 60px;
			}
		}

		&__titleWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__title {
			color: var(--neutral-1000);
			text-align: center;
		}

		&__description {
			font-size: var(--body-large);
			color: var(--primary-500);
			text-align: center;
		}
	}
`;

const GeometricImageContent = ({
	title,
	subTitle,
	description,
	imageUrl,
	imageAlt
}: ImageContentProps) => {
	return (
		<ImageContent>
			<div className="content__background">
				<TriangleCorner />
			</div>
			<img src={imageUrl} alt={imageAlt} className="content__image" />
			<div className="content__textWrapper">
				<div className="content__titleWrapper">
					<h3 className="content__title">{title}</h3>
					<h3 className="content__title">{subTitle}</h3>
				</div>
				<p className="content__description">{description}</p>
			</div>
		</ImageContent>
	);
};

export default GeometricImageContent;
