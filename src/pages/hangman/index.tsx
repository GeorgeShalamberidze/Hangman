import Modal from '@/components/modal';
import useModal from '@/hooks/useModal';
import BurgerMenu from '@/assets/svg/burger.svg?react';
import Letter from '@/components/letter';
import { useCategoryContext } from '@/context/useCategoryContext';
import { Alphabet, ALPHABET } from '@/constants/alphabet';
import { useState } from 'react';
import { CategoryType } from '@/api/categories/index.types';

const HangmanPageView: React.FC = () => {
	const { chosenCategory, categories } = useCategoryContext();
	const { hideModal, showModal, isModalOpen } = useModal();
	const [alphabet, setAlphabet] = useState<Alphabet[]>(ALPHABET);

	return (
		<div className="h-screen w-full bg-slate-900 bg-opacity-70">
			<div className="text-headingXL text-white flex h-screen flex-col w-[80%] mx-auto">
				<div className="flex items-center gap-14 mb-5">
					<BurgerMenu
						onClick={showModal}
						className="cursor-pointer hover:opacity-85 h-10 sm:h-20"
					/>
					<p className="text-headingM sm:text-headingL">{chosenCategory}</p>
				</div>
				<div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-3">
					{alphabet.map((letter, i) => (
						<Letter
							key={i}
							selected={letter.selected}
							value={letter.value}
							setAlphabet={setAlphabet}
						/>
					))}
				</div>
				{isModalOpen ? <Modal hideModal={hideModal} /> : null}
			</div>
		</div>
	);
};

export default HangmanPageView;
