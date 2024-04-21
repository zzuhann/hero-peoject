import { Box, Typography } from '@mui/material';
import { ContainerStyles, ImageStyles } from './style';
import { memo } from 'react';
import { useStableNavigate } from '@/context';

type Props = {
	id: string;
	name: string;
	imageUrl: string;
};

const HeroCard = memo(({ id, name, imageUrl }: Props) => {
	const navigate = useStableNavigate();

	const handleClickCard = () => {
		navigate(`/heroes/${id}`);
	};

	return (
		<ContainerStyles onClick={handleClickCard}>
			<Box>
				<ImageStyles src={imageUrl} />
			</Box>
			<Typography>{name}</Typography>
		</ContainerStyles>
	);
});

export default HeroCard;
