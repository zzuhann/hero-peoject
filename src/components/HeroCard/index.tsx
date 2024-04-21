import { Box, Typography } from '@mui/material';
import { ContainerStyles, ImageStyles } from './style';

type Props = {
	name: string;
	imageUrl: string;
};

const HeroCard = ({ name, imageUrl }: Props) => {
	return (
		<ContainerStyles>
			<Box>
				<ImageStyles src={imageUrl} />
			</Box>
			<Typography>{name}</Typography>
		</ContainerStyles>
	);
};

export default HeroCard;
