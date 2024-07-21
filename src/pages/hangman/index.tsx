import Modal from '@/components/modal';
import { useCategoryContext } from '@/context/useCategoryContext';
import useModal from '@/hooks/useModal';
import BurgerMenu from '@/assets/svg/burger.svg?react';

const HangmanPageView: React.FC = () => {
	const { chosenCategory } = useCategoryContext();
	const { hideModal, showModal, isModalOpen } = useModal();

	return (
		<div className="text-headingXL text-white flex h-screen w-full flex-col items-center justify-center">
			{chosenCategory}
			<BurgerMenu onClick={showModal} className="cursor-pointer" />
			{isModalOpen ? <Modal hideModal={hideModal} /> : null}
		</div>
	);
};

export default HangmanPageView;
