import Modal from '@/components/modal';
import { useCategoryContext } from '@/context/useCategoryContext';
import useModal from '@/hooks/useModal';
import BurgerMenu from '@/assets/svg/burger.svg?react';

const HangmanPageView: React.FC = () => {
	const { chosenCategory } = useCategoryContext();
	const { hideModal, showModal, isModalOpen } = useModal();

	return (
		<div className="text-headingXL text-white flex h-screen flex-col w-[80%] mx-auto">
			<div className="flex items-center gap-14">
				<BurgerMenu
					onClick={showModal}
					className="cursor-pointer hover:opacity-85"
				/>
				<p className="text-headingL">{chosenCategory}</p>
			</div>
			{isModalOpen ? <Modal hideModal={hideModal} /> : null}
		</div>
	);
};

export default HangmanPageView;
