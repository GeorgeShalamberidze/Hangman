type HangmanLetterPropTypes = {
	letter: string;
	isCorrect: boolean;
};

const HangmanLetter: React.FC<HangmanLetterPropTypes> = ({
	letter,
	isCorrect,
}) => {
	return (
		<div
			className={`text-headingS sm:text-headingM w-8 sm:w-10 md:w-[80px] flex items-center justify-center rounded-3xl ${letter == ' ' ? 'bg-transparent' : 'bg-blue'} ${isCorrect ? 'opacity-100' : 'opacity-40'}`}
		>
			<p className={`uppercase ${!isCorrect ? 'text-transparent' : ''}`}>
				{letter}
			</p>
		</div>
	);
};

export default HangmanLetter;
