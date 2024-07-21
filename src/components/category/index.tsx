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
	const { categories, setCategories } = useCategoryContext();

	const handleOnClick = () => {
		if (!categories) return;

		setChosenCategory(categoryName);

		const category = categories[categoryName];
		const randomI = Math.floor(Math.random() * category.length);
		const selectedItem = category[randomI];

		console.log(selectedItem);

		const updatedCategoryList = category.map((item, i) =>
			i === randomI ? { ...item, selected: true } : item
		);

		setCategories(
			(prev) =>
				({
					...prev,
					[categoryName]: updatedCategoryList,
				}) as CategoryData
		);

		navigate(GAME_PATHS.HANGMAN);
		console.log(categories);
	};

	return (
		<div
			className="bg-blue flex items-center justify-center text-white rounded-3xl md:rounded-[40px] h-20 md:h-36 lg:h-[180px] cursor-pointer hover:opacity-80"
			onClick={handleOnClick}
		>
			<p className="text-headingS md:text-headingM">{categoryName}</p>
		</div>
	);
};

export default Category;
