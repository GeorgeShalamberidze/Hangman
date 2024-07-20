import { Outlet } from 'react-router';

const RootLayout = () => {
	return (
		<div className="bg-main-menu-bg bg-cover bg-center bg-no-repeat min-h-screen w-screen">
			<Outlet />
		</div>
	);
};

export default RootLayout;
