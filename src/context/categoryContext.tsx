import { getCategoriesData } from '@/api/categories/api';
import { CategoryData, CategoryType } from '@/api/categories/index.types';
import { ALPHABET, Alphabet } from '@/constants/alphabet';
import { isWordGuessed } from '@/helpers';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import {
	createContext,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

type CategoryContextType = {
	categories: CategoryData | undefined;
	chosenCategory: CategoryType | undefined;
	word: string | undefined;
	isNewGame: boolean;
	isGameWon: boolean;
	health: number;
	alphabet: Alphabet[];
	setIsGameWon: React.Dispatch<SetStateAction<boolean>>;
	setHealth: React.Dispatch<SetStateAction<number>>;
	setChosenCategory: React.Dispatch<
		React.SetStateAction<CategoryType | undefined>
	>;
	setCategories: React.Dispatch<SetStateAction<CategoryData | undefined>>;
	setWord: React.Dispatch<SetStateAction<string | undefined>>;
	setAlphabet: React.Dispatch<SetStateAction<Alphabet[]>>;
	setIsNewGame: React.Dispatch<SetStateAction<boolean>>;
	handleOnCategoryClick: (categoryName: CategoryType) => void;
	handlePlayAgainClick: () => void;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: undefined,
	chosenCategory: undefined,
	word: undefined,
	isNewGame: false,
	isGameWon: false,
	health: 0,
	alphabet: [],
	setAlphabet: (): void => undefined,
	setHealth: (): void => undefined,
	setChosenCategory: (): void => undefined,
	setCategories: (): void => undefined,
	setWord: (): void => undefined,
	setIsNewGame: (): void => undefined,
	setIsGameWon: (): void => undefined,
	handleOnCategoryClick: (categoryName: CategoryType) => undefined,
	handlePlayAgainClick: (): void => undefined,
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
	const [isGameWon, setIsGameWon] = useState<boolean>(false);
	const [alphabet, setAlphabet] = useState<Alphabet[]>(ALPHABET);

	const navigate = useNavigate();

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

	const selectedLetters = alphabet
		.filter((letter) => letter.selected)
		.map((letter) => letter.value.toLocaleLowerCase());

	useEffect(() => {
		if (isWordGuessed(word!, selectedLetters)) {
			setIsGameWon(true);
		}
	}, [alphabet]);

	const handlePlayAgainClick = () => {
		if (
			!categories ||
			!chosenCategory ||
			categories[chosenCategory].length === 0
		)
			return;

		const category = categories[chosenCategory].filter(
			(item) => !item.selected
		);
		const randomI = Math.floor(Math.random() * category.length);
		const selectedItem = category[randomI];

		setHealth(MAX_HEALTH);
		setWord(selectedItem?.name);
		setAlphabet(ALPHABET);
		setIsGameWon(false);
	};

	const handleOnCategoryClick = (categoryName: CategoryType) => {
		if (!categories || categories[categoryName].length === 0) return;

		setChosenCategory(categoryName);

		const category = categories[categoryName].filter((item) => !item.selected);
		const randomI = Math.floor(Math.random() * category.length);
		const selectedItem = category[randomI];

		const updatedCategoryList = category.map((item, i) =>
			i === randomI ? { ...item, selected: true } : item
		);

		const updatedCategories = {
			...categories,
			[categoryName]: updatedCategoryList,
		};

		setCategories(updatedCategories);
		setWord(selectedItem?.name);
		setHealth(MAX_HEALTH);
		setAlphabet(ALPHABET);
		setIsGameWon(false);

		localStorage.setItem('categories', JSON.stringify(updatedCategories));
		navigate(GAME_PATHS.HANGMAN);
	};

	return (
		<CategoryContext.Provider
			value={{
				word,
				isGameWon,
				categories,
				chosenCategory,
				isNewGame,
				health,
				alphabet,
				setAlphabet,
				setHealth,
				setIsNewGame,
				setIsGameWon,
				setChosenCategory,
				handlePlayAgainClick,
				handleOnCategoryClick,
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
