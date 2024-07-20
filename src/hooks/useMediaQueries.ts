import { useState, useEffect } from 'react';

const useMediaQuery = (heighBreakpoint?: number) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);

	useEffect(() => {
		const widthListener = () => {
			if (window.innerWidth <= 578) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		widthListener();

		window.addEventListener('resize', widthListener);
		return () => window.removeEventListener('resize', widthListener);
	}, []);

	useEffect(() => {
		const heightListener = () => {
			if (heighBreakpoint && window.innerHeight <= heighBreakpoint) {
				setIsSmallDevice(true);
			} else {
				setIsSmallDevice(false);
			}
		};
		heightListener();

		window.addEventListener('resize', heightListener);
		return () => window.removeEventListener('resize', heightListener);
	}, []);

	return {
		isMobile,
		isSmallDevice,
	};
};

export default useMediaQuery;
