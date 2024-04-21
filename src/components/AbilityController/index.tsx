import { Profile } from '@/apis/type';
import { Box, Typography } from '@mui/material';
import { ControllerContainerStyles, ControllerStyles, ListContainerStyles } from './style';

type AbilityControllerProps = {
	abilityName: keyof Profile;
	abilityValue: number;
	handleChangeProfile: (key: keyof Profile, action: 'increase' | 'decrease') => void;
	remaining: number;
};

const AbilityController = ({
	abilityName,
	abilityValue,
	handleChangeProfile,
	remaining,
}: AbilityControllerProps) => {
	return (
		<ControllerContainerStyles>
			<Box sx={{ width: '80px' }}>
				<Typography variant='h6' color='#3d3d3e'>
					{abilityName}
				</Typography>
			</Box>
			<ControllerStyles
				variant='outlined'
				disabled={remaining === 0}
				onClick={() => handleChangeProfile(abilityName, 'increase')}
			>
				<Typography variant='h6'>+</Typography>
			</ControllerStyles>
			<Typography variant='h6' color='#3d3d3e'>
				{abilityValue}
			</Typography>
			<ControllerStyles
				variant='outlined'
				disabled={abilityValue === 0}
				onClick={() => handleChangeProfile(abilityName, 'decrease')}
			>
				<Typography variant='h6'>-</Typography>
			</ControllerStyles>
		</ControllerContainerStyles>
	);
};

type AbilityControllerListProps = {
	abilities: { name: keyof Profile; value: number }[];
	handleChangeProfile: (key: keyof Profile, action: 'increase' | 'decrease') => void;
	remaining: number;
};

const AbilityControllerList = ({
	abilities,
	handleChangeProfile,
	remaining,
}: AbilityControllerListProps) => {
	return (
		<ListContainerStyles>
			{abilities.map((ability) => (
				<AbilityController
					key={ability.name}
					abilityName={ability.name}
					abilityValue={ability.value}
					remaining={remaining}
					handleChangeProfile={handleChangeProfile}
				/>
			))}
		</ListContainerStyles>
	);
};

export default AbilityControllerList;
