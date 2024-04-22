import { Box, styled } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContainerStyles = styled(Box)({
	borderRadius: '10px',
	padding: '20px',
	width: '100%',
	marginTop: '30px',
	display: 'flex',
	justifyContent: 'space-between',
});

export const RightContainerStyles = styled(Box)({
	alignSelf: 'flex-end',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
});

export const SaveButtonStyles = styled(LoadingButton)({
	width: '150px',
});
