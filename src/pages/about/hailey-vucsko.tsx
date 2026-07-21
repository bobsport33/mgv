import styled from "@emotion/styled";

import AttorneyBio from "@/modules/AttorneyBio/Index";
import Head from "next/head";

const AboutContainer = styled.section`
	.about__content {
		overflow: hidden;
		width: 100%;
		padding: 36px;
	}
`;

export default function Caidi() {
	return (
		<>
			<Head>
				<title>Hailey Vucsko | Associate Attorney | MGV Law</title>
				<meta
					name="description"
					content="Hailey Vucsko is a Chicago family law associate at MGV, bringing a client-focused approach and hands-on courtroom experience from her externship in the Cook County Domestic Relations Division."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AboutContainer>
				<AttorneyBio
					name="Hailey Vucsko"
					title="Attorney at Law, Partner"
					image="/images/team/hailey-vucsko.jpg"
				>
					<p className="attorneyBio__paragraph">
						Hailey earned her Juris Doctor from the University of
						Illinois Chicago School of Law and her bachelor&apos;s
						degree from Illinois State University. While in law
						school, she was selected for the Moot Court Honors
						Council after placing among the top oral advocates,
						reflecting her strong oral advocacy and analytical
						skills and was a member of the Child and Family Law
						Society.
					</p>

					<p className="attorneyBio__paragraph">
						Hailey also externed with the Honorable Gregory E. Ahern
						Jr. in the Domestic Relations Division of the Circuit
						Court of Cook County. During her externship, she
						observed a wide range of matters, including divorce and
						parentage cases, and gained valuable insight into
						judicial decision-making and courtroom procedure from
						the bench’s perspective.
					</p>
					<p className="attorneyBio__paragraph">
						Hailey is committed to a thoughtful, client-focused
						approach to family law, working closely with clients to
						navigate challenging circumstances and achieve practical
						and sustainable resolutions.
					</p>
				</AttorneyBio>
			</AboutContainer>
		</>
	);
}
