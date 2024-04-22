import { Box, Button, styled } from '@mui/material';

export const ContainerStyles = styled(Box)({
	display: 'flex',
	gap: '15px',
	alignItems: 'center',
});

export const CounterStyles = styled(Button)({
	minWidth: 'auto',
	width: '30px',
	height: '30px',
	padding: '10px',
});

export const AbilityValueContainerStyles = styled(Box)({
	width: '50px',
	textAlign: 'center',
});

export const AbilityNameContainerStyles = styled(Box)({
	width: '80px',
});
