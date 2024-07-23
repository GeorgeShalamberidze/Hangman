import Modal from '@/components/modal';
import useModal from '@/hooks/useModal';
import BurgerMenu from '@/assets/svg/burger.svg?react';
import KeyboardLetter from '@/components/keyboardLetter';
import { useCategoryContext } from '@/context/useCategoryContext';
import HangmanLetter from '@/components/hangmanLetter';
import HealthBar from '@/components/healthBar';

const HangmanPageView: React.FC = () => {
	const { chosenCategory, word, health, alphabet, isGameWon, setAlphabet } =
		useCategoryContext();
	const { hideModal, showModal, isModalOpen } = useModal();

	const selectedAlphabet = alphabet
		.filter((letter) => letter.selected)
		.map((letter) => letter.value.toLocaleLowerCase());

	const incorrectLetterCount = selectedAlphabet.filter(
		(lett) => !word?.includes(lett.toLocaleLowerCase())
	).length;

	return (
		<div className="h-screen w-full bg-slate-900 bg-opacity-70">
			<div className="text-headingXL text-white flex h-screen flex-col w-[90%] ms:w-[90%] mx-auto">
				<div className="flex justify-between mb-8 gap-10">
					<div className="flex items-center gap-4 xs:gap-8 sm:gap-14">
						<BurgerMenu
							onClick={showModal}
							className="cursor-pointer hover:opacity-85 h-8 xs:h-10 sm:h-20"
						/>
						<p className="text-headingM sm:text-headingL">{chosenCategory}</p>
					</div>
					<div className="flex flex-1">
						<HealthBar incorrectLetterCount={incorrectLetterCount} />
					</div>
				</div>

				<div className="flex flex-col gap-16">
					<div className="flex gap-3 w-full mx-auto items-center justify-center">
						<div className="flex gap-y-4 gap-x-20 flex-wrap items-center justify-center">
							{word?.split(' ').map((letter, i) => {
								return (
									<div className="flex gap-4 flex-wrap" key={i}>
										{letter.split('').map((lett, ii) => (
											<HangmanLetter
												key={ii}
												letter={lett}
												isCorrect={selectedAlphabet.includes(
													lett.toLocaleLowerCase()
												)}
											/>
										))}
									</div>
								);
							})}
						</div>
					</div>

					<div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-3 w-[90%] mx-auto">
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
				{isModalOpen ? (
					<Modal gameState="paused" hideModal={hideModal} />
				) : null}
				{health === 0 ? (
					<Modal gameState="lost" hideModal={hideModal} />
				) : health > 0 && isGameWon ? (
					<Modal gameState="won" hideModal={hideModal} />
				) : null}
			</div>
		</div>
	);
};

export default HangmanPageView;
