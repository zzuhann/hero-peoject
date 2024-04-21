import { Typography } from '@mui/material';
import { ContainerStyles, ImageStyles } from './style';
import { useStableNavigate } from '@/context';

type Props = {
	id: string;
	name: string;
	imageUrl: string;
	isActive: boolean;
};

const HeroCard = ({ id, name, imageUrl, isActive }: Props) => {
	const navigate = useStableNavigate();

	const handleClickCard = () => {
		navigate(`/heroes/${id}`);
	};

	return (
		<ContainerStyles onClick={handleClickCard} isActive={isActive}>
			<ImageStyles src={imageUrl} />
			<Typography variant='h6' fontWeight='bold'>
				{name}
			</Typography>
		</ContainerStyles>
	);
};

export default HeroCard;
