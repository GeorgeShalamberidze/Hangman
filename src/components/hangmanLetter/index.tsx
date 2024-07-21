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
			className={`text-headingM flex items-center justify-center rounded-3xl ${letter == ' ' ? 'bg-transparent' : 'bg-blue'} ${isCorrect ? 'opacity-100' : 'opacity-40'}`}
		>
			<p className={`uppercase ${!isCorrect ? 'text-transparent' : ''}`}>
				{letter}
			</p>
		</div>
	);
};

export default HangmanLetter;
