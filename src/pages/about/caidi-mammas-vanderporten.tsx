import styled from "@emotion/styled";

import AttorneyBio from "@/modules/AttorneyBio/Index";
import Head from "next/head";
import Button from "@/components/Button/Index";

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;

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
				<title>Caidi Mammas Vanderporten | Partner | MGV Law</title>
				<meta
					name="description"
					content=" Caidi Mammas Vanderporten is a Chicago family law attorney specializing in divorce, parental responsibilities, DCFS appeals, and mediation. Named to Illinois Super Lawyers Rising Stars 2020–2026."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AboutContainer>
				<AttorneyBio
					name="Caidi Mammas Vanderporten"
					title="Attorney at Law, Partner"
					image="/images/team/caidi-mammas-vanderporten.jpg"
				>
					<p className="attorneyBio__paragraph">
						Caidi Mammas Vanderporten is a Partner at the boutique
						family law firm, MAMMAS GOLDBERG VANDERPORTEN, in
						Chicago. Caidi specializes in all aspects of domestic
						relations law, including divorce, allocation of parental
						responsibilities, pre and postnuptial agreements, Orders
						of Protection, Child Support modification and
						enforcement, Appellate review, and DCFS Administrative
						Appeals/Child Protection issues. She is a certified
						mediator and a fellow in Collaborative Law and serves on
						the Lilac Tree Center for Divorce Resources attorney
						referral panel. She often speaks on local news about
						issues surrounding domestic relations and prenuptial
						agreements and hosts Continuing Legal Education panels,
						presenting topical information to practitioners and
						judges.
					</p>

					<p className="attorneyBio__paragraph">
						Prior to joining MAMMAS GOLDBERG VANDERPORTEN, Caidi was
						an Assistant State’s Attorney in Cook County, where her
						practice focused on working within the Juvenile Justice
						and Child Support Enforcement Bureaus as well as on the
						Felony Review Unit. Caidi graduated from Chicago-Kent
						College of Law and did her undergraduate studies at the
						University of Wisconsin-Madison. Caidi has been selected
						for inclusion in the Illinois Rising Stars list for
						2020-2026 and The Best Lawyers: Ones to Watch list for
						2021-2026. Caidi’s firm was selected as a Best Law Firm
						in Chicago for Family Law for 2023-2026. Caidi has three
						little boys, Miles, Grant, and Rhodes with her husband
						Steven, a litigator at Gould, Grieco & Hensley focusing
						on mass torts.
					</p>
				</AttorneyBio>
				<Button text="Back to About" href="/about" theme="tertiary" />
			</AboutContainer>
		</>
	);
}
