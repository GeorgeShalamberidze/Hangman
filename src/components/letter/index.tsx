import { Alphabet } from '@/constants/alphabet';
import { SetStateAction } from 'react';

type LetterPropTypes = {
	value: string;
	selected: boolean;
	setAlphabet: React.Dispatch<SetStateAction<Alphabet[]>>;
};

const Letter: React.FC<LetterPropTypes> = ({
	value,
	selected,
	setAlphabet,
}) => {
	const handleLetterClick = () => {
		setAlphabet((prev) =>
			prev.map((letter) =>
				letter.value === value ? { ...letter, selected: true } : letter
			)
		);
	};

	return (
		<div
			className={`p-2 rounded-2xl select-none text-black flex items-center justify-center text-headingS cursor-pointer bg-white ${!selected ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}
			onClick={handleLetterClick}
		>
			{value}
		</div>
	);
};

export default Letter;
