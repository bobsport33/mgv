import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "motion/react";

import RightArrowIcon from "@/svgs/right_arrow.svg";
import LeftArrowIcon from "@/svgs/left_arrow.svg";
import { media } from "@/styles/breakpoints";

interface TestimonialProps {
	title: string;
	testimonials: string[];
}

const TestimonialContainer = styled.section`
	padding: 60px 36px;
	width: 100%;
	background:
		linear-gradient(
			180deg,
			rgba(217, 217, 217, 0.8) 0%,
			rgba(217, 217, 217, 0.8) 100%
		),
		url("/images/city3.png");
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 25px;

	${media.tablet} {
		padding: 36px;
		gap: 15px;
	}

	${media.mobile} {
		padding: 24px;
	}

	.testimonial {
		&__title {
		}

		&__content {
			width: %;
			display: grid;
			grid-template-columns: 48px 1fr 48px;
			align-items: center;
			gap: 1rem;

			${media.tablet} {
				width: 100%;
			}
		}

		&__viewport {
			position: relative;
			width: 100%;
		}

		/* Invisible stack that reserves height = tallest testimonial */
		&__sizer {
			display: grid;
			visibility: hidden;
			pointer-events: none;
		}

		&__sizer-item {
			grid-area: 1 / 1;
			margin: 0;
			padding: 0 1rem;
		}

		/* Visible, animated slide sits on top, filling the reserved box */
		&__slide {
			position: absolute;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 1rem;
		}

		&__text {
			margin: 0;
			font-size: 2.25rem;
			line-height: 1.7;
			font-family: var(--font-bricolage);
			text-align: center;

			${media.tablet} {
				font-size: 1.5rem;
				line-height: 1.4;
			}
		}

		&__button {
			background: none;
			border: none;
			cursor: pointer;
			font-size: 2rem;
			color: inherit;
			padding: 0;
			width: 48px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: opacity 0.2s ease;

			& svg {
				fill: var(--secondary-500);
				height: 70px;
				width: 50px;

				& path {
					height: 100%;
					width: 100%;
				}
			}

			&:hover {
				opacity: 0.6;
			}
		}

		&__dots {
			display: flex;
			justify-content: center;
			gap: 0.75rem;
		}

		&__dot {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			border: none;
			padding: 0;
			cursor: pointer;
			border: 1px solid var(--primary-500);
			transition: all 0.25s ease;

			&--active {
				background: var(--primary-500);
				transform: scale(1.2);
			}
		}
	}
`;

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 80 : -80,
		opacity: 0
	}),
	center: {
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -80 : 80,
		opacity: 0
	})
};

const TestimonialCarousel = ({ title, testimonials }: TestimonialProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const next = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const previous = () => {
		setDirection(-1);
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	const goTo = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	useEffect(() => {
		if (testimonials.length <= 1) return;

		const timer = window.setTimeout(() => {
			next();
		}, 8000);

		return () => window.clearTimeout(timer);
	}, [currentIndex, testimonials.length]);

	return (
		<TestimonialContainer onMouseEnter={() => window.clearTimeout}>
			<h3 className="testimonial__title">{title}</h3>

			<div className="testimonial__content">
				<button
					className="testimonial__button testimonial__button--previous"
					onClick={previous}
					aria-label="Previous testimonial"
				>
					<LeftArrowIcon />
				</button>

				<div className="testimonial__viewport">
					{/* Invisible: renders every testimonial stacked in one grid
					    cell so the viewport height = tallest testimonial */}
					<div className="testimonial__sizer" aria-hidden="true">
						{testimonials.map((text, index) => (
							<p
								key={index}
								className="testimonial__text testimonial__sizer-item"
							>
								{text}
							</p>
						))}
					</div>

					{/* Visible, animated slide layered on top */}
					<AnimatePresence
						initial={false}
						mode="wait"
						custom={direction}
					>
						<motion.div
							key={currentIndex}
							className="testimonial__slide"
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								duration: 0.45,
								ease: [0.22, 1, 0.36, 1]
							}}
						>
							<p className="testimonial__text">
								{testimonials[currentIndex]}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>

				<button
					className="testimonial__button testimonial__button--next"
					onClick={next}
					aria-label="Next testimonial"
				>
					<RightArrowIcon />
				</button>
			</div>

			<div className="testimonial__dots">
				{testimonials.map((_, index) => (
					<button
						key={index}
						className={`testimonial__dot ${
							index === currentIndex
								? "testimonial__dot--active"
								: ""
						}`}
						onClick={() => goTo(index)}
						aria-label={`Go to testimonial ${index + 1}`}
					/>
				))}
			</div>
		</TestimonialContainer>
	);
};

export default TestimonialCarousel;
