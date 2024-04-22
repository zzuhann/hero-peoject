import { Typography } from '@mui/material';
import { ContainerStyles, ImageStyles } from './style';

type Props = {
	id: string;
	name: string;
	imageUrl: string;
	isActive: boolean;
	onClick: () => void;
};

const HeroCard = ({ name, imageUrl, isActive, onClick }: Props) => {
	return (
		<ContainerStyles onClick={onClick} isActive={isActive}>
			<ImageStyles src={imageUrl} />
			<Typography variant='h6' fontWeight='bold'>
				{name}
			</Typography>
		</ContainerStyles>
	);
};

export default HeroCard;
