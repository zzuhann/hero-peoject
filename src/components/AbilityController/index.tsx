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
			<Box sx={{ width: '20px' }}>
				<Typography>{abilityName}</Typography>
			</Box>
			<ControllerStyles
				variant='contained'
				disabled={remaining === 0}
				onClick={() => handleChangeProfile(abilityName, 'increase')}
			>
				+
			</ControllerStyles>
			<Typography>{abilityValue}</Typography>
			<ControllerStyles
				variant='contained'
				disabled={abilityValue === 0}
				onClick={() => handleChangeProfile(abilityName, 'decrease')}
			>
				-
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
