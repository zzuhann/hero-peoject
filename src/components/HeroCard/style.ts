import { Box, styled } from '@mui/material';

export const ContainerStyles = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
	border: 'solid 1px black',
	width: '250px',
	padding: '15px',
	textAlign: 'center',
	cursor: 'pointer',
});

export const ImageStyles = styled('img')({
	width: '100%',
	height: '250px',
	objectFit: 'cover',
});
