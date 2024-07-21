import ModalBoard from '@/assets/svg/modalBoard.svg?react';
import ModalBoardSmall from '@/assets/svg/modalBoard-small.svg?react';
import Paused from '@/assets/svg/paused.svg?react';
import Continue from '@/assets/svg/continue.svg?react';
import NewCategory from '@/assets/svg/new-category.svg?react';
import Quit from '@/assets/svg/quit-game.svg?react';
import { useNavigate } from 'react-router-dom';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import useMediaQuery from '@/hooks/useMediaQueries';
import { useCategoryContext } from '@/context/useCategoryContext';

type ModalPropTypes = {
	hideModal: () => void;
};

const Modal = ({ hideModal }: ModalPropTypes) => {
	const navigate = useNavigate();
	const { isMobile } = useMediaQuery();
	const { setIsNewGame } = useCategoryContext();
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
					<Paused className="w-[70%] ms:w-1/2 h-auto absolute left-1/2 -translate-x-1/2 bottom-[90%] ms:bottom-[86%]" />
					<Continue
						className="w-[70%] ms:w-[40%] h-auto left-1/2 -translate-x-1/2 absolute bottom-[55%] cursor-pointer hover:opacity-75"
						onClick={hideModal}
					/>
					<NewCategory
						className="w-[80%] ms:w-1/2 h-auto left-1/2 -translate-x-1/2 absolute bottom-[35%] cursor-pointer hover:opacity-75"
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
