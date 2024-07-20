import useMediaQuery from '@/hooks/useMediaQueries';

export type HowToPlayCardPropType = {
	id?: number;
	number: string;
	header: string;
	info: string;
};

const HowToPlayCard: React.FC<HowToPlayCardPropType> = ({
	header,
	info,
	number,
}) => {
	const { isSmallDevice, isMobile } = useMediaQuery(700);

	return (
		<div
			className={`bg-white rounded-[40px] flex flex-row lg:flex-col lg:p-0 p-5 pl-9 w-full gap-5 lg:gap-0 ${isSmallDevice ? 'lg:min-h-[480px]' : 'lg:min-h-[550px]'}`}
		>
			{!isMobile ? (
				<div
					className={`text-blue text-headingL text-center items-center flex lg:block mt-2 mb-2 ${isSmallDevice ? 'my-3' : 'lg:mt-[60px] lg:mb-10'}`}
				>
					{number}
				</div>
			) : null}
			<div>
				<div className="text-dark-navy mb-1 lg:mb-10 text-start lg:text-center flex lg:block gap-5 lg:gap-0 uppercase text-headingS lg:text-headingM">
					{isMobile ? <p className="text-blue">{number}</p> : null}
					{header}
				</div>
				<div className="text-light-gray mx-0 lg:mx-12 text-start lg:text-center mb-0 lg:mb-[30px] text-[24px]">
					{info}
				</div>
			</div>
		</div>
	);
};

export default HowToPlayCard;
