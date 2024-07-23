import { CategoryType } from '@/api/categories/index.types';
import { useCategoryContext } from '@/context/useCategoryContext';

export type CategoryPropTypes = {
	categoryName: CategoryType;
};

const Category: React.FC<CategoryPropTypes> = ({ categoryName }) => {
	const { categories, handleOnCategoryClick } = useCategoryContext();

	return (
		<div
			className={`${categories?.[categoryName].length === 0 ? 'opacity-15 pointer-events-none' : 'opacity-100'} bg-blue flex items-center justify-center text-white rounded-3xl md:rounded-[40px] h-20 md:h-36 lg:h-[180px] cursor-pointer hover:opacity-80`}
			onClick={() => handleOnCategoryClick(categoryName)}
		>
			<p className="text-headingS md:text-headingM">{categoryName}</p>
		</div>
	);
};

export default Category;
