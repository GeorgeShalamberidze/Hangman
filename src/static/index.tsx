import { HowToPlayCardPropType } from '@/components/howToPlayCard';

export const INFO_CARD_DATA: HowToPlayCardPropType[] = [
	{
		id: 1,
		number: '01',
		header: 'Choose a category',
		info: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
	},
	{
		id: 2,
		number: '02',
		header: 'Guess letters',
		info: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.',
	},
	{
		id: 3,
		number: '03',
		header: 'Win or lose',
		info: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
	},
];
