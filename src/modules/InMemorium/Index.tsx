import styled from "@emotion/styled";

const InMemoriamContainer = styled.section`
	padding: 4rem 2rem;
	background-color: var(--color-primary, #1a2b4c);
	color: #fff;
	text-align: center;

	.in-memoriam__inner {
		max-width: 800px;
		margin: 0 auto;
	}

	.in-memoriam__eyebrow {
		font-size: 0.875rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 0.5rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 0.25rem;
		color: #fff;
	}

	.in-memoriam__dates {
		font-style: italic;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 1.5rem;
	}

	p {
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
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
				<p>{copy}</p>
			</div>
		</InMemoriamContainer>
	);
}
