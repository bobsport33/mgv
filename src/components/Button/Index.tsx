import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type BaseProps = {
	text: string;
	theme?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "surface-primary"
		| "surface-secondary"
		| "surface-tertiary";
};

type ButtonProps = BaseProps & {
	onClick: () => void;
	href?: never;
	disabled?: boolean;
};

type LinkProps = BaseProps & {
	href: string;
	onClick?: never;
};

type Props = ButtonProps | LinkProps;

const buttonStyles = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	border: 1px solid transparent;
	font-size: 1.5rem;
	font-weight: 400;
	text-decoration: none;
	cursor: pointer;

	transition:
		background-color 0.2s ease,
		color 0.2s ease,
		border-color 0.2s ease;

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	&.button--primary {
		background-color: var(--primary-500);
		color: var(--neutral-100);

		&:hover:not(:disabled) {
			background-color: var(--primary-600);
		}
	}

	&.button--secondary {
		background-color: var(--secondary-500);
		color: var(--neutral-100);

		&:hover:not(:disabled) {
			background-color: var(--secondary-600);
		}
	}

	&.button--tertiary {
		background-color: var(--tertiary-500);
		color: var(--primary-500);

		&:hover:not(:disabled) {
			background-color: var(--tertiary-600);
		}
	}

	&.button--surface-primary,
	&.button--surface-secondary {
		background-color: var(--neutral-100);
		color: var(--secondary-500);

		&:hover:not(:disabled) {
			background-color: var(--primary-200);
		}
	}

	&.button--surface-tertiary {
		background-color: var(--neutral-100);
		color: var(--tertiary-500);

		&:hover:not(:disabled) {
			background-color: var(--tertiary-200);
		}
	}
`;

const ButtonContainer = styled.button`
	${buttonStyles}
`;

const LinkContainer = styled(Link)`
	${buttonStyles}
`;

const Button = (props: Props) => {
	const { text, theme = "primary" } = props;

	const className = `button button--${theme}`;

	if ("href" in props) {
		return (
			<LinkContainer href={props.href ?? ""} className={className}>
				{text}
			</LinkContainer>
		);
	}

	return (
		<ButtonContainer
			onClick={props.onClick}
			className={className}
			disabled={props.disabled}
		>
			{text}
		</ButtonContainer>
	);
};

export default Button;
