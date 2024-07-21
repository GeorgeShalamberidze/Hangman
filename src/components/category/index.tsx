import { GAME_PATHS } from '@/routes/enums/index.enum';
import { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

export type CategoryPropTypes = {
	categoryName: string;
	setChosenCategory: React.Dispatch<SetStateAction<string | undefined>>;
};

const Category: React.FC<CategoryPropTypes> = ({
	categoryName,
	setChosenCategory,
}) => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		setChosenCategory(categoryName);
		navigate(GAME_PATHS.HANGMAN);
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
