import { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
import { motion } from "motion/react";

import TeamMember from "./TeamMember";
import { Attorney } from "@/types/types";

interface TeamProps {
	attorneys: Attorney[];
	setSelectedAttorney: Dispatch<SetStateAction<Attorney | null>>;
}

const TeamWrapper = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 72px;
	width: 100%;
	flex-shrink: 0;

	.team {
		&__members {
			display: flex;
			flex-direction: column;
			gap: 96px;
			margin: 0 36px;
		}
	}
`;

const Team = ({ attorneys, setSelectedAttorney }: TeamProps) => {
	return (
		<TeamWrapper className="team">
			<div className="team__members">
				{attorneys.map((attorney) => (
					<TeamMember
						key={attorney.name}
						attorney={attorney}
						setSelectedAttorney={setSelectedAttorney}
					/>
				))}
			</div>
		</TeamWrapper>
	);
};

export default Team;
