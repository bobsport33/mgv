const breakpoints = {
	mobile: 580,
	tablet: 1100,
	desktop: 1440
};

export const media = {
	mobile: `@media (max-width: ${breakpoints.mobile}px)`,
	tablet: `@media (max-width: ${breakpoints.tablet}px)`,
	desktop: `@media (max-width: ${breakpoints.desktop}px)`
};

export default breakpoints;
