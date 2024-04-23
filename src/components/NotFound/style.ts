import { Box, Button, styled } from '@mui/material';
import notFoundImage from '@/assets/404-not-found.png';

export const ContainerStyles = styled(Box)({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	background: `#3d3d3e url(${notFoundImage}) no-repeat center`,
});

export const ButtonStyles = styled(Button)({
	position: 'absolute',
	top: '75%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});
