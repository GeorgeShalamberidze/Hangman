import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div>Error 404</div>
			<button onClick={() => navigate('/')}>Back to Home</button>
		</div>
	);
};

export default PageNotFound;
