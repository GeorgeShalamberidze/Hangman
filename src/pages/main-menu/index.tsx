import HangmanBoard from '@/assets/svg/hangman-board.svg?react';
import BoardRect from '@/assets/svg/board-rect.svg?react';
import PlayButtonDefault from '@/assets/svg/play-button-default.svg?react';
import PlayButtonHover from '@/assets/svg/play-button-hover.svg?react';
import HowToPlayButtonDefault from '@/assets/svg/how-to-play-default.svg?react';
import HowToPlayButtonHover from '@/assets/svg/how-to-play-hover.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import { useCategoryContext } from '@/context/useCategoryContext';

const MainMenuPageView: React.FC = () => {
	const [isPlayButtonHovered, setIsPlayButtonHovered] =
		useState<boolean>(false);
	const [isHowToPlayButtonHovered, setIsHowToPlayButtonHovered] =
		useState<boolean>(false);
	const navigate = useNavigate();
	const { setIsNewGame } = useCategoryContext();

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<div className="relative w-fit">
				<BoardRect className="h-[500px] w-full" />
				<HangmanBoard className="absolute h-[185px] w-full left-1/2 -translate-x-1/2 -top-20" />
				<div
					className="absolute w-fit h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
					onMouseEnter={() => setIsPlayButtonHovered(true)}
					onMouseLeave={() => setIsPlayButtonHovered(false)}
					onClick={() => {
						navigate(GAME_PATHS.CATEGORY_PICK);
						setIsNewGame(true);
					}}
				>
					{isPlayButtonHovered ? (
						<PlayButtonHover className="w-full h-full" />
					) : (
						<PlayButtonDefault className="w-full h-full" />
					)}
				</div>

				<div
					className="absolute w-fit h-[62px] bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
					onMouseEnter={() => setIsHowToPlayButtonHovered(true)}
					onMouseLeave={() => setIsHowToPlayButtonHovered(false)}
					onClick={() => navigate(GAME_PATHS.HOW_TO_PLAY)}
				>
					{isHowToPlayButtonHovered ? (
						<HowToPlayButtonHover className="w-full h-full" />
					) : (
						<HowToPlayButtonDefault className="w-full h-full" />
					)}
				</div>
			</div>
		</div>
	);
};

export default MainMenuPageView;
