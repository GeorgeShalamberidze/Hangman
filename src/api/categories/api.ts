import api from '..';
import { CATEGORY_DATA } from './enum';
import { CategoryData, CategoryDataResponse } from './index.types';

export const getCategoriesData = async (
	query: string = '',
	config?: object
): Promise<CategoryData> => {
	const res = await api.get<CategoryDataResponse>(
		`${CATEGORY_DATA.GET_DATA}?${query}`,
		config
	);
	return res.data.categories;
};
