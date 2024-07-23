import ModalBoard from '@/assets/svg/modalBoard.svg?react';
import ModalBoardSmall from '@/assets/svg/modalBoard-small.svg?react';
import Paused from '@/assets/svg/paused.svg?react';
import YouLost from '@/assets/svg/you-lose.svg?react';
import YouWin from '@/assets/svg/you-win.svg?react';
import Continue from '@/assets/svg/continue.svg?react';
import PlayAgain from '@/assets/svg/play-again.svg?react';
import NewCategory from '@/assets/svg/new-category.svg?react';
import Quit from '@/assets/svg/quit-game.svg?react';
import { useNavigate } from 'react-router-dom';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import useMediaQuery from '@/hooks/useMediaQueries';
import { useCategoryContext } from '@/context/useCategoryContext';

type ModalPropTypes = {
	hideModal: () => void;
	gameState: 'paused' | 'lost' | 'won';
};

const Modal: React.FC<ModalPropTypes> = ({ hideModal, gameState }) => {
	const navigate = useNavigate();
	const { isMobile } = useMediaQuery();
	const { setIsNewGame, handlePlayAgainClick, chosenCategory } =
		useCategoryContext();

	return (
		<>
			<div
				className="fixed right-0 top-0 w-full h-screen bg-black z-40 overflow-x-hidden opacity-60 items-center justify-center flex"
				onClick={hideModal}
			></div>
			<div
				className="flex opacity-100 text-white w-[95%] !h-[500px] z-50 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="h-auto relative w-fit">
					{isMobile ? (
						<ModalBoardSmall className="w-full h-auto max-h-[445px]" />
					) : (
						<ModalBoard className="w-full h-auto max-h-[445px]" />
					)}
					{gameState === 'paused' ? (
						<Paused className="w-[70%] ms:w-1/2 h-auto absolute left-1/2 -translate-x-1/2 bottom-[90%] ms:bottom-[86%]" />
					) : gameState === 'lost' ? (
						<YouLost className="w-[70%] ms:w-1/2 h-auto absolute left-1/2 -translate-x-1/2 bottom-[90%] ms:bottom-[86%]" />
					) : (
						<YouWin className="w-[70%] ms:w-1/2 h-auto absolute left-1/2 -translate-x-1/2 bottom-[90%] ms:bottom-[86%]" />
					)}
					{gameState === 'paused' ? (
						<Continue
							className="w-[70%] ms:w-[40%] h-auto left-1/2 -translate-x-1/2 absolute bottom-[55%] cursor-pointer hover:opacity-75"
							onClick={hideModal}
						/>
					) : (
						<PlayAgain
							className="w-[70%] ms:w-[40%] h-auto left-1/2 -translate-x-1/2 absolute bottom-[55%] cursor-pointer hover:opacity-75"
							onClick={() => {
								if (!chosenCategory) {
									navigate(GAME_PATHS.CATEGORY_PICK);
								} else {
									handlePlayAgainClick();
								}
							}}
						/>
					)}
					<NewCategory
						className="w-[90%] xs:w-[80%] ms:w-1/2 h-auto left-1/2 -translate-x-1/2 absolute bottom-[35%] cursor-pointer hover:opacity-75"
						onClick={() => navigate(GAME_PATHS.CATEGORY_PICK)}
					/>
					<Quit
						className="w-[70%] ms:w-[40%] h-auto left-1/2 -translate-x-1/2 absolute bottom-[15%] cursor-pointer hover:opacity-75"
						onClick={() => {
							localStorage.removeItem('categories');
							setIsNewGame(false);
							navigate(GAME_PATHS.MAIN_MENU);
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Modal;
