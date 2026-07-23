import React, { Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";

import { Attorney } from "@/types/types";

interface AttorneyProfileProps {
	selectedAttorney: Attorney | null;
	setSelectedAttorney: Dispatch<SetStateAction<Attorney | null>>;
}

const Profile = styled.div`
	width: 100%;
	flex-shrink: 0;
`;

const AttorneyProfile = ({
	selectedAttorney,
	setSelectedAttorney
}: AttorneyProfileProps) => {
	console.log("selectedAttorney", selectedAttorney);
	return (
		<Profile>
			{selectedAttorney && selectedAttorney.name}
			<button onClick={() => setSelectedAttorney(null)}>back</button>
		</Profile>
	);
};

export default AttorneyProfile;
