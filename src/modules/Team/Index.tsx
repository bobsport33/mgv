import styled from "@emotion/styled";

import TeamMember from "./TeamMember";
import { Attorney } from "@/types/types";

interface TeamProps {
	attorneys: Attorney[];
}

const TeamWrapper = styled.section`
	margin: 36px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 72px;

	.team {
		&__header {
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}

		&__heading {
			color: var(--neutral-1000);
			text-align: center;
		}

		&__intro {
			font-size: var(--body-large);
			line-height: 1.75;
			color: var(--neutral-800);
		}

		&__members {
			display: flex;
			flex-direction: column;
			gap: 96px;
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
