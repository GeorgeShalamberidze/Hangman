import BackButton from '@/assets/svg/back-button.svg?react';
import HowToPlayBoard from '@/assets/svg/how-to-play-board.svg?react';
import HowToPlayCard from '@/components/howToPlayCard';
import useMediaQuery from '@/hooks/useMediaQueries';
import { ROOT_PATHS } from '@/routes/enums/index.enum';
import { INFO_CARD_DATA } from '@/static';
import { useNavigate } from 'react-router-dom';

const HowToPlayPageView: React.FC = () => {
	const navigate = useNavigate();
	const { isSmallDevice } = useMediaQuery(700);

	return (
		<div className="max-w-screen w-full min-h-screen flex flex-col items-center pt-10 bg-slate-900 bg-opacity-70">
			<div className="w-[90%]">
				<div
					className={`flex relative justify-end md:justify-center items-start w-full ${isSmallDevice ? 'mb-3 md:mb-5' : 'mb-3 md:mb-20'}`}
				>
					<BackButton
						className="absolute left-0 cursor-pointer hover:opacity-70 h-[40px] md:h-[92px]"
						onClick={() => navigate(ROOT_PATHS.GAME)}
					/>
					<HowToPlayBoard className="flex items-center justify-end md:justify-center h-[40px] sm:h-[58px] md:h-full" />
				</div>

				<div className="flex w-full mx-auto flex-col gap-[32px] lg:flex-row mb-5">
					{INFO_CARD_DATA.map((card) => {
						const { header, info, number, id } = card;
						return (
							<HowToPlayCard
								key={id}
								header={header}
								info={info}
								number={number}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HowToPlayPageView;
