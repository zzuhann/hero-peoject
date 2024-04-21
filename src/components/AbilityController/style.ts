import { Box, Button, styled } from '@mui/material';

export const ControllerContainerStyles = styled(Box)({
	display: 'flex',
	gap: '15px',
	alignItems: 'center',
});

export const ControllerStyles = styled(Button)({
	minWidth: 'auto',
	width: '30px',
	height: '30px',
	padding: '10px',
});

export const ListContainerStyles = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
});

export const AbilityValueContainerStyles = styled(Box)({
	width: '50px',
	textAlign: 'center',
});
