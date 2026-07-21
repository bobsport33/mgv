import { media } from "@/styles/breakpoints";
import styled from "@emotion/styled";

const InMemoriamContainer = styled.section`
	padding: 4rem 2rem;
	background-color: var(--color-primary, #1a2b4c);
	color: #fff;
	text-align: center;

	${media.mobile} {
		padding: 24px;
	}

	.in-memoriam__inner {
		max-width: 70%;
		margin: 0 auto;

		${media.tablet} {
			max-width: 100%;
		}
	}

	.in-memoriam__eyebrow {
		font-size: var(--body-small);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 0.5rem;

		${media.mobile} {
			margin-bottom: 0.3rem;
		}
	}

	h2 {
		font-size: 2.4rem;
		margin-bottom: 0.25rem;
		color: #fff;
	}

	.in-memoriam__dates {
		font-size: var(--body-medium);
		font-style: italic;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 1.5rem;

		${media.mobile} {
			margin-bottom: 1rem;
		}
	}

	p {
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		font-size: var(--body-medium);
	}
`;

interface InMemoriamProps {
	name: string;
	dates: string;
	copy: string;
}

export default function InMemoriam({ name, dates, copy }: InMemoriamProps) {
	return (
		<InMemoriamContainer>
			<div className="in-memoriam__inner">
				<p className="in-memoriam__eyebrow">In Memoriam</p>
				<h2>{name}</h2>
				<p className="in-memoriam__dates">{dates}</p>
				<p className="in-memoriam__copy">{copy}</p>
			</div>
		</InMemoriamContainer>
	);
}
