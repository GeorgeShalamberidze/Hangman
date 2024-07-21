import { useCategoryContext } from '@/context/useCategoryContext';
import { GAME_PATHS } from '@/routes/enums/index.enum';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const { chosenCategory } = useCategoryContext();

	if (!chosenCategory) {
		return <Navigate to={GAME_PATHS.CATEGORY_PICK} />;
	}

	return children;
};

export default ProtectedRoute;
