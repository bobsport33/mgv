import styled from "@emotion/styled";

import TeamMember from "./TeamMember";
import { Attorney } from "@/types/types";

interface TeamProps {
	attorneys: Attorney[];
}

const TeamWrapper = styled.section`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 72px;

	.team {
		&__header {
			height: 600px;
			padding: 36px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 24px;
			text-align: center;

			background:
				linear-gradient(
					180deg,
					rgba(217, 217, 217, 0.7) 70%,
					rgba(119, 141, 173, 0.6) 100%
				),
				url("/images/city2.jpg");
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
		}

		&__heading {
			margin-top: 60px;
			color: var(--neutral-1000);
			text-align: center;
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: var(--neutral-800);
			max-width: 1000px;
		}

		&__members {
			display: flex;
			flex-direction: column;
			gap: 96px;
			margin: 0 36px;
		}
	}
`;

const Team = ({ attorneys }: TeamProps) => {
	return (
		<TeamWrapper className="team">
			<div className="team__header">
				<h1 className="team__heading">Meet the MGV Team</h1>

				<p className="team__intro">
					MAMMAS GOLDBERG was founded in 1981 by Evan Mammas and Jerry
					Goldberg with a shared commitment to exceptional family law
					representation. Over four decades later, that legacy
					continues now as MAMMAS GOLDBERG VANDERPORTEN, with Caidi
					Mammas Vanderporten partnering with founder Evan Mammas.
				</p>
			</div>

			<div className="team__members">
				{attorneys.map((attorney) => (
					<TeamMember key={attorney.name} {...attorney} />
				))}
			</div>
		</TeamWrapper>
	);
};

export default Team;
