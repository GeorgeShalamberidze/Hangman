import { useContext } from 'react';
import { CategoryContext } from './categoryContext';

export const useCategoryContext = () => {
	const context = useContext(CategoryContext);

	if (typeof context === 'undefined') {
		throw new Error(
			'useCategoryContext must be used inside CategoryContextProvider'
		);
	}

	return context;
};
