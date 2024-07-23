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
	word: string | undefined;
	isNewGame: boolean;
	health: number;
	setHealth: React.Dispatch<SetStateAction<number>>;
	setChosenCategory: React.Dispatch<
		React.SetStateAction<CategoryType | undefined>
	>;
	setCategories: React.Dispatch<SetStateAction<CategoryData | undefined>>;
	setWord: React.Dispatch<SetStateAction<string | undefined>>;
	setIsNewGame: React.Dispatch<SetStateAction<boolean>>;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: undefined,
	chosenCategory: undefined,
	word: undefined,
	isNewGame: false,
	health: 0,
	setHealth: (): void => undefined,
	setChosenCategory: (): void => undefined,
	setCategories: (): void => undefined,
	setWord: (): void => undefined,
	setIsNewGame: (): void => undefined,
});

export const MAX_HEALTH = 8;

const CategoryProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryData | undefined>();
	const [chosenCategory, setChosenCategory] = useState<
		CategoryType | undefined
	>();
	const [word, setWord] = useState<string | undefined>();
	const storedCategories = localStorage.getItem('categories');
	const [isNewGame, setIsNewGame] = useState<boolean>(false);
	const [health, setHealth] = useState<number>(MAX_HEALTH);

	useEffect(() => {
		if (storedCategories) {
			setCategories(JSON.parse(storedCategories));
		} else {
			getCategoriesData().then((res) => {
				setCategories(res);
				localStorage.setItem('categories', JSON.stringify(res));
			});
		}
	}, [isNewGame]);

	return (
		<CategoryContext.Provider
			value={{
				word,
				categories,
				chosenCategory,
				isNewGame,
				health,
				setHealth,
				setIsNewGame,
				setChosenCategory,
				setCategories,
				setWord,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

CategoryContext.displayName = 'Category Context';

export default CategoryProvider;
