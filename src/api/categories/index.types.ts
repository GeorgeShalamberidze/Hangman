export type ItemType = {
	name: string;
	selected: boolean;
};

export type CategoryType =
	| 'Animal'
	| 'Capital Cities'
	| 'Countries'
	| 'Movies'
	| 'Sports'
	| 'TV Shows';

export type CategoryData = {
	[key in CategoryType]: ItemType[];
};

export type CategoryDataResponse = {
	categories: CategoryData;
};
