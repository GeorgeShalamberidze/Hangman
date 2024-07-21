import ModalBoard from '@/assets/svg/modalBoard.svg?react';

type ModalPropTypes = {
	hideModal: () => void;
};

const Modal = ({ hideModal }: ModalPropTypes) => {
	const gradientStyle = {
		fontSize: '1em',
		fontWeight: 'bold',
		background: 'linear-gradient(to bottom, #67B6FF 0%, #FFFFFF 100%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		backgroundClip: 'text',
		textFillColor: 'transparent',
	};
	return (
		<>
			<div
				className="fixed right-0 top-0 w-full h-screen bg-black z-40 overflow-x-hidden opacity-90 items-center justify-center flex"
				onClick={hideModal}
			></div>
			<div
				className="flex opacity-100 text-white w-1/2 z-50 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				<div
					className="w-full h-full relative"
					style={{
						border: '1px solid red',
					}}
				>
					<ModalBoard className="w-full relative" />
				</div>
			</div>
		</>
	);
};

export default Modal;
