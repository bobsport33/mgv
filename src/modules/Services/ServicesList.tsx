import React from "react";
import styled from "@emotion/styled";
import { motion } from "motion/react";

import { media } from "@/styles/breakpoints";

const ServicesListContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	padding: 0 36px 80px;

	${media.tablet} {
		flex-direction: column;
		align-items: center;

		padding: 0 36px 36px;
	}

	${media.mobile} {
		padding: 0 24px 24px;
	}

	.services-list {
		&__card {
			flex: 1;
			max-width: 560px;
			padding: 48px 40px;
			border-radius: 4px;
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 18px;

			${media.tablet} {
				width: 80%;
				max-width: 80%;
				padding: 36px 32px;
			}

			${media.mobile} {
				width: 100%;
				max-width: 100%;
				padding: 24px 20px;
				gap: 12px;
			}

			&--primary {
				background-color: var(--primary-500);
			}

			&--secondary {
				background-color: var(--secondary-500);
			}
		}

		&__item {
			display: flex;
			align-items: flex-start;
			gap: 14px;
			font-size: var(--body-large);
			line-height: 1.4;
			color: #fff;

			&::before {
				content: "";
				flex-shrink: 0;
				margin-top: 12px;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: #fff;
			}

			${media.mobile} {
				font-size: 1rem;
				line-height: 1.5;
			}
		}
	}
`;

const listOne = [
	"Dissolution of marriage",
	"Prenuptial and postnuptial agreements",
	"Allocation of parental responsibilities and parenting plan",
	"Establishment of parent-child relationship",
	"DCFS administrative appeals",
	"DCFS case navigation services",
	"Maintenance",
	"Child support",
	"Division and allocation of marital and non-marital property",
	"Parenting time"
];

const listTwo = [
	"Parental relocation (removal)",
	"Appellate reviews (appeals)",
	"Legal separation",
	"Declaration of invalidity of marriage",
	"Grandparent visitation",
	"Civil unions and separations",
	"Orders of protection",
	"Mediation",
	"Collaborative divorces",
	"Guardian ad Litem (child's representative advocacy)"
];

const ServicesList = () => {
	return (
		<ServicesListContainer>
			<motion.ul
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.35 }}
				transition={{
					duration: 0.6,
					ease: "easeOut"
				}}
				className="services-list__card services-list__card--primary"
			>
				{listOne.map((item) => (
					<li className="services-list__item" key={item}>
						{item}
					</li>
				))}
			</motion.ul>
			<motion.ul
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.35 }}
				transition={{
					duration: 0.6,
					ease: "easeOut"
				}}
				className="services-list__card services-list__card--secondary"
			>
				{listTwo.map((item) => (
					<li className="services-list__item" key={item}>
						{item}
					</li>
				))}
			</motion.ul>
		</ServicesListContainer>
	);
};

export default ServicesList;
