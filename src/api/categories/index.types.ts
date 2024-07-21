export type CategoryItem = {
	name: string;
	selected: boolean;
};

export type CategoryType =
	| 'Animals'
	| 'Capital Cities'
	| 'Countries'
	| 'Movies'
	| 'Sports'
	| 'TV Shows';

export type CategoryData = {
	[key in CategoryType]: CategoryItem[];
};

export type CategoryDataResponse = {
	categories: CategoryData;
};
