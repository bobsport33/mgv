import styled from "@emotion/styled";

import TeamMember from "./TeamMember";
import { Attorney } from "@/types/types";

interface TeamProps {
	attorneys: Attorney[];
}

const TeamWrapper = styled.div`
	padding: 36px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 72px;
	width: 100%;
	flex-shrink: 0;
	/* TODO: Add some background texture/gradient to this */
	background-color: #b5b5b5;
	background-image: url("/images/clean-gray-paper.png");
	/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

	.team {
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
			<div className="team__members">
				{attorneys.map((attorney) => (
					<TeamMember key={attorney.name} attorney={attorney} />
				))}
			</div>
		</TeamWrapper>
	);
};

export default Team;
