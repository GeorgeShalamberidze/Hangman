import { CategoryData, CategoryType } from '@/api/categories/index.types';
import { useCategoryContext } from '@/context/useCategoryContext';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

export type CategoryPropTypes = {
	categoryName: CategoryType;
	setChosenCategory: React.Dispatch<SetStateAction<CategoryType | undefined>>;
};

const Category: React.FC<CategoryPropTypes> = ({
	categoryName,
	setChosenCategory,
}) => {
	const navigate = useNavigate();
	const { categories, setCategories, setWord } = useCategoryContext();
	const handleOnClick = () => {
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

		localStorage.setItem('categories', JSON.stringify(updatedCategories));
		navigate(GAME_PATHS.HANGMAN);
	};

	return (
		<div
			className={`${categories?.[categoryName].length === 0 ? 'opacity-15 pointer-events-none' : 'opacity-100'} bg-blue flex items-center justify-center text-white rounded-3xl md:rounded-[40px] h-20 md:h-36 lg:h-[180px] cursor-pointer hover:opacity-80`}
			onClick={handleOnClick}
		>
			<p className="text-headingS md:text-headingM">{categoryName}</p>
		</div>
	);
};

export default Category;
