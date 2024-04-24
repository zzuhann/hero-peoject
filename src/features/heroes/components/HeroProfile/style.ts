import { Box, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContainerStyles = styled(Box)({
	borderRadius: '10px',
	padding: '20px',
	width: '100%',
	marginTop: '30px',
	display: 'flex',
	justifyContent: 'space-between',

	'@media(max-width: 520px)': {
		flexDirection: 'column',
		alignItems: 'center',
		gap: '30px',
	},
});

export const RightContainerStyles = styled(Box)({
	alignSelf: 'flex-end',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
	textAlign: 'right',

	'@media(max-width: 520px)': {
		alignSelf: 'center',
		textAlign: 'center',
	},
});

export const SaveButtonStyles = styled(LoadingButton)({
	width: '150px',
});
