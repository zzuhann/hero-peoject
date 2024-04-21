import { Profile } from '@/apis/type';
import { Box, Typography, Button } from '@mui/material';

type Props = {
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
}: Props) => {
	return (
		<Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
			<Box sx={{ width: '20px' }}>
				<Typography>{abilityName}</Typography>
			</Box>
			<Button
				variant='contained'
				disabled={remaining === 0}
				onClick={() => handleChangeProfile(abilityName, 'increase')}
				sx={{ minWidth: 'auto', width: '30px', height: '30px', padding: '10px' }}
			>
				+
			</Button>
			<Typography>{abilityValue}</Typography>
			<Button
				variant='contained'
				disabled={abilityValue === 0}
				onClick={() => handleChangeProfile(abilityName, 'decrease')}
				sx={{ minWidth: 'auto', width: '30px', height: '30px', padding: '10px' }}
			>
				-
			</Button>
		</Box>
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
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			{abilities.map((ability) => (
				<AbilityController
					key={ability.name}
					abilityName={ability.name}
					abilityValue={ability.value}
					remaining={remaining}
					handleChangeProfile={handleChangeProfile}
				/>
			))}
		</Box>
	);
};

export default AbilityControllerList;
