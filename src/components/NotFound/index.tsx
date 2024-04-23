import { useStableNavigate } from '@/context';
import { ButtonStyles, ContainerStyles } from './style';

const NotFound = () => {
	const navigate = useStableNavigate();

	const backToHeroes = () => {
		navigate('/heroes');
	};

	return (
		<ContainerStyles>
			<ButtonStyles onClick={backToHeroes} variant='contained' color='error'>
				回到首頁
			</ButtonStyles>
		</ContainerStyles>
	);
};

export default NotFound;
