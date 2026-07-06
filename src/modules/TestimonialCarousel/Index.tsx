import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "motion/react";

import RightArrowIcon from "@/svgs/right_arrow.svg";
import LeftArrowIcon from "@/svgs/left_arrow.svg";

interface TestimonialProps {
	title: string;
	testimonials: string[];
}

const TestimonialContainer = styled.section`
	padding: 36px;
	height: 525px;
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

	.testimonial {
		&__title {
		}

		&__content {
			width: 85%;
			display: grid;
			grid-template-columns: 48px 1fr 48px;
			align-items: center;
			gap: 1rem;
			height: 80%;
		}

		&__viewport {
			position: relative;
			overflow: hidden;
			min-height: 140px;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

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
			margin-top: 2rem;
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
