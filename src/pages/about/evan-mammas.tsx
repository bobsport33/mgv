import styled from "@emotion/styled";

import Head from "next/head";
import AttorneyBio from "@/modules/AttorneyBio/Index";
import Button from "@/components/Button/Index";
import { media } from "@/styles/breakpoints";

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	padding: 40px;

	${media.tablet} {
		padding: 36px;
	}

	${media.mobile} {
		align-items: flex-end;
		padding: 24px;
	}

	.about__content {
		overflow: hidden;
		width: 100%;
		padding: 36px;
	}
`;

export default function Evan() {
	return (
		<>
			<Head>
				<title>Evan James Mammas | Founding Partner | MGV Law</title>
				<meta
					name="description"
					content="With over 40 years of family law experience, Evan Mammas is a recognized leader in Chicago matrimonial law—skilled in negotiation, complex litigation, and helping clients navigate their most difficult moments."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AboutContainer>
				<AttorneyBio
					name="Evan James Mammas"
					title="Attorney at Law, Founding Partner"
					image="/images/team/evan-mammas.jpg"
				>
					<p className="attorneyBio__paragraph">
						Evan James Mammas, Founding Partner, has more than 40
						years of experience concentrating in domestic relations
						and family law. His practice encompasses all aspects of
						matrimonial and family law, including complex litigation
						involving child-related matters, maintenance and support
						issues, business valuations for professional, medical,
						and closely held corporations, and the equitable
						allocation of marital property. Evan has been recognized
						by his peers as a Leading Lawyer in matrimonial law,
						most recently in 2026.
					</p>

					<p className="attorneyBio__paragraph">
						Evan is dedicated to helping clients navigate difficult
						personal and legal challenges while pursuing the best
						possible outcome on their behalf. Although family law
						matters are often highly contentious, he strongly
						believes that disputes should be resolved through
						negotiation and mutual agreement whenever possible,
						helping clients avoid the financial and emotional costs
						of prolonged litigation. This approach requires
						patience, strategic advocacy, persistent negotiation,
						and thoughtful counseling grounded in a practical
						understanding of the law.
					</p>

					<p className="attorneyBio__paragraph">
						When litigation becomes necessary, Evan is a highly
						experienced trial attorney who is equally comfortable in
						the courtroom. Over the course of his career, he has
						successfully tried countless divorce, custody, and other
						family law matters involving clients from diverse
						backgrounds and a wide range of legal and financial
						complexities.
					</p>

					<p className="attorneyBio__paragraph">
						Evan graduated from Purdue University and earned his
						Juris Doctor from IIT-Chicago-Kent College of Law. He
						has been a member of the American Bar Association and
						its Family Law Section, the Chicago Bar Association, and
						the Illinois State Bar Association. He previously served
						as President of the Hellenic Bar Association and as a
						member of the Advisory Board of Northside Community
						Bank. These leadership roles have further strengthened
						the perspective and skills he brings to his family law
						practice.
					</p>

					<p className="attorneyBio__paragraph">
						Outside the office, Evan is a proud grandfather of three
						grandsons. Since 2018, he has had the privilege of
						practicing alongside his daughter, Caidi, continuing a
						family commitment to serving clients with dedication,
						integrity, and compassion.
					</p>
				</AttorneyBio>
				<Button text="Back to About" href="/about" theme="tertiary" />
			</AboutContainer>
		</>
	);
}
