import styled from "@emotion/styled";
import { motion } from "motion/react";

import TeamMember from "./TeamMember";
import { Attorney } from "@/types/types";
import { media } from "@/styles/breakpoints";

interface TeamProps {
	attorneys: Attorney[];
}

const TeamWrapper = styled.div`
	padding: 60px 36px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	gap: 72px;
	width: 100%;
	flex-shrink: 0;
	background-color: #b5b5b5;
	background-image: url("/images/fabric-plaid.png");

	${media.tablet} {
		padding: 40px 24px;
	}

	${media.mobile} {
		padding: 24px;
	}

	.team {
		&__members {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
			gap: 60px;
			margin: 0 36px;

			${media.tablet} {
				gap: 40px;
			}

			${media.mobile} {
				grid-template-columns: 1fr;
				margin: 0;
				gap: 36px;
			}
		}
	}
`;

const Team = ({ attorneys }: TeamProps) => {
	return (
		<TeamWrapper className="team">
			<motion.div
				className="team__members"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.4
						}
					}
				}}
			>
				{attorneys.map((attorney) => (
					<TeamMember key={attorney.name} attorney={attorney} />
				))}
			</motion.div>
		</TeamWrapper>
	);
};

export default Team;
