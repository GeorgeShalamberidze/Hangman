import { getCategoriesData } from '@/api/categories/api';
import { CategoryData } from '@/api/categories/index.types';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

type CategoryContextType = {
	categories: CategoryData | [];
	chosenCategory: string | undefined;
	setChosenCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: [],
	chosenCategory: undefined,
	setChosenCategory: (): void => undefined,
});

const CategoryProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryData | []>([]);
	const [chosenCategory, setChosenCategory] = useState<string | undefined>();

	useEffect(() => {
		getCategoriesData().then((res) => {
			setCategories(res);
		});
	}, []);

	return (
		<CategoryContext.Provider
			value={{
				categories,
				chosenCategory,
				setChosenCategory,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

CategoryContext.displayName = 'Category Context';

export default CategoryProvider;
