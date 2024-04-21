import { Box, Typography } from '@mui/material';
import { ContainerStyles, ImageStyles } from './style';

const HeroCard = () => {
	return (
		<ContainerStyles>
			<Box>
				<ImageStyles src='https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/seventeen-s-coups-has-suffered-a-knee-injury-and-will-be-going-on-a-hiatus-174202-16x9.jpg?VersionId=.N1ZR3v4ssiSzOkqT1LcLT33St5lYki0' />
			</Box>
			<Typography>Hero Name</Typography>
		</ContainerStyles>
	);
};

export default HeroCard;
