import Modal from '@/components/modal';
import useModal from '@/hooks/useModal';
import BurgerMenu from '@/assets/svg/burger.svg?react';
import KeyboardLetter from '@/components/keyboardLetter';
import { useCategoryContext } from '@/context/useCategoryContext';
import { Alphabet, ALPHABET } from '@/constants/alphabet';
import { useState } from 'react';
import HangmanLetter from '@/components/hangmanLetter';

const HangmanPageView: React.FC = () => {
	const { chosenCategory, word } = useCategoryContext();
	const { hideModal, showModal, isModalOpen } = useModal();

	const [alphabet, setAlphabet] = useState<Alphabet[]>(ALPHABET);

	const selectedAlphabet = alphabet
		.filter((letter) => letter.selected)
		.map((letter) => letter.value.toLocaleLowerCase());

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

				<div className="flex flex-col gap-10">
					<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
						{word?.split('').map((letter, i) => {
							return (
								<HangmanLetter
									key={i}
									letter={letter}
									isCorrect={selectedAlphabet.includes(
										letter.toLocaleLowerCase()
									)}
								/>
							);
						})}
					</div>

					<div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-3">
						{alphabet.map((letter, i) => (
							<KeyboardLetter
								key={i}
								selected={letter.selected}
								value={letter.value}
								setAlphabet={setAlphabet}
							/>
						))}
					</div>
				</div>
				{isModalOpen ? <Modal hideModal={hideModal} /> : null}
			</div>
		</div>
	);
};

export default HangmanPageView;
