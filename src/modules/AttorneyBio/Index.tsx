import Image from "next/image";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface AttorneyBioProps {
	name: string;
	title: string;
	image: string;
	children: ReactNode;
}

const AttorneyBioWrapper = styled.section``;

const AttorneyBio = ({ name, title, image, children }: AttorneyBioProps) => {
	return (
		<AttorneyBioWrapper>
			<div className="attorneyBio__profile">
				<div className="attorneyBio__imageWrapper">
					<Image
						className="attorneyBio__image"
						src={image}
						alt={name}
						fill
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
