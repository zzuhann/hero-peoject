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
	border: isActive ? 'solid 2px #bcbcbc' : 'solid 2px #acacac',
	borderRadius: '10px',
	padding: '20px 30px',
	textAlign: 'center',
	cursor: 'pointer',
	flexBasis: 'calc(25% - 20px)',
	opacity: isActive ? 1 : 0.4,
	transform: isActive ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',

	'@media(max-width: 1100px)': {
		flexBasis: 'calc(50% - 20px)',
	},

	'@media(max-width:520px)': {
		flexBasis: 'calc(100% - 20px)',
	},

	'&:hover': {
		transform: 'translateY(-10px) scale(1.05)',
		transition: 'all 0.5s',
		opacity: 1,
	},
}));

export const ImageStyles = styled('img')({
	width: '100%',
	height: '220px',
	objectFit: 'cover',
	borderRadius: '10px',
});
