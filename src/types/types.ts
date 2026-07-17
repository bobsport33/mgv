export type Attorney = {
	name: string;
	title: string;
	image: string;
	link: string;
	reverse?: boolean;
};

export type ServiceGroup = {
	title: string;
	services: string[];
};
