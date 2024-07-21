import { useCategoryContext } from '@/context/useCategoryContext';
import { useNavigate } from 'react-router-dom';
import { ROOT_PATHS } from '@/routes/enums/index.enum';
import BackButton from '@/assets/svg/back-button.svg?react';
import PickCategoryBoard from '@/assets/svg/pick-a-category.svg?react';
import Category from '@/components/category';
import { CategoryType } from '@/api/categories/index.types';

const CategoryPickPageView: React.FC = () => {
	const { categories, setChosenCategory } = useCategoryContext();
	const navigate = useNavigate();

	return (
		<div className="max-w-screen w-full min-h-screen flex flex-col items-center pt-14 bg-slate-900 bg-opacity-70">
			<div className="w-[90%] flex flex-col gap-5 lg:gap-10 mb-10">
				<div className="flex relative justify-end md:justify-center items-start w-full mb-3">
					<BackButton
						className="absolute -left-5 sm:left-0 cursor-pointer hover:opacity-70 h-[35px] md:h-16 lg:h-[92px]"
						onClick={() => navigate(ROOT_PATHS.GAME)}
					/>
					<PickCategoryBoard className="flex items-center justify-end md:justify-center h-[35px] sm:h-[58px] lg:h-full" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[50px] w-full mx-auto items-center justify-center">
					{categories &&
						Object.keys(categories).map((category, i) => {
							return (
								<Category
									key={i}
									categoryName={category as CategoryType}
									setChosenCategory={setChosenCategory}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default CategoryPickPageView;
