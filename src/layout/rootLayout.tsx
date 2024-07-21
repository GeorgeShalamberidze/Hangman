import CategoryProvider from '@/context/categoryContext';
import { Outlet } from 'react-router';

const RootLayout = () => {
	return (
		<div className="bg-main-menu-bg bg-cover bg-center bg-no-repeat min-h-screen w-screen">
			<CategoryProvider>
				<Outlet />
			</CategoryProvider>
		</div>
	);
};

export default RootLayout;
