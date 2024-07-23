export const isWordGuessed = (word: string, guessed: string[]) => {
	if (!word) return;
	const uniqueLetters = new Set(
		word
			.toLocaleLowerCase()
			.split('')
			.filter((letter) => letter !== ' ')
	);
	return [...uniqueLetters]?.every((letter) => guessed.includes(letter));
};
