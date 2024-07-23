import Heart from '@/assets/svg/heart.svg?react';
import { MAX_HEALTH } from '@/context/categoryContext';
import { useCategoryContext } from '@/context/useCategoryContext';
import { useEffect } from 'react';

type HealthBarPropTyps = {
	incorrectLetterCount: number;
};

const HealthBar: React.FC<HealthBarPropTyps> = ({ incorrectLetterCount }) => {
	const { setHealth, health } = useCategoryContext();

	useEffect(() => {
		setHealth(MAX_HEALTH - incorrectLetterCount);
	}, [incorrectLetterCount, setHealth]);

	const healthPercentage = (health / MAX_HEALTH) * 100;

	return (
		<div className="flex flex-1 justify-end items-center gap-10">
			<div className="bg-white rounded-3xl flex items-center p-2 w-full max-w-[240px]">
				<div
					style={{ width: `${healthPercentage}%` }}
					className="h-[15px] bg-dark-navy rounded-3xl"
				></div>
			</div>
			<div className="items-center flex">
				<Heart className="w-full h-auto" />
			</div>
		</div>
	);
};

export default HealthBar;
