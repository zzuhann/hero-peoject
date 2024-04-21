import { Box, styled, BoxProps } from '@mui/material';

interface ContainerStylesProps extends BoxProps {
	isActive: boolean;
}

export const ContainerStyles = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'isActive',
})<ContainerStylesProps>(({ isActive }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
	border: isActive ? 'solid 1px blue' : 'solid 1px black',
	width: '250px',
	padding: '15px',
	textAlign: 'center',
	cursor: 'pointer',
}));

export const ImageStyles = styled('img')({
	width: '100%',
	height: '250px',
	objectFit: 'cover',
});
