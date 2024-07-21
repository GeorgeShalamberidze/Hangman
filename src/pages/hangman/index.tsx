import { useCategoryContext } from '@/context/useCategoryContext';

const HangmanPageView: React.FC = () => {
	const { chosenCategory } = useCategoryContext();
	return (
		<div className="text-headingXL text-white flex h-screen w-full flex-col items-center justify-center">
			{chosenCategory}
		</div>
	);
};

export default HangmanPageView;
