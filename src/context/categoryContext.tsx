import { getCategoriesData } from '@/api/categories/api';
import { CategoryData, CategoryType } from '@/api/categories/index.types';
import {
	createContext,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';

type CategoryContextType = {
	categories: CategoryData | undefined;
	chosenCategory: CategoryType | undefined;
	setChosenCategory: React.Dispatch<
		React.SetStateAction<CategoryType | undefined>
	>;
	setCategories: React.Dispatch<SetStateAction<CategoryData | undefined>>;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: undefined,
	chosenCategory: undefined,
	setChosenCategory: (): void => undefined,
	setCategories: (): void => undefined,
});

const CategoryProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryData | undefined>();
	const [chosenCategory, setChosenCategory] = useState<
		CategoryType | undefined
	>();

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
				setCategories,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

CategoryContext.displayName = 'Category Context';

export default CategoryProvider;
