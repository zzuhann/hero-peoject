import { Profile } from '@/apis/type';
import { Typography } from '@mui/material';
import {
	AbilityNameContainerStyles,
	AbilityValueContainerStyles,
	ContainerStyles,
	CounterStyles,
} from './style';
import { useContext } from 'react';
import { HeroesContext } from '@/context/heroesContext';

type Props = {
	abilityName: keyof Profile;
	abilityValue: number;
	isAbleToIncrease: boolean;
	isAbleToDecrease: boolean;
};

const AbilityCounter = ({
	abilityName,
	abilityValue,
	isAbleToIncrease,
	isAbleToDecrease,
}: Props) => {
	const { handleChangeProfile } = useContext(HeroesContext);
	return (
		<ContainerStyles>
			<AbilityNameContainerStyles>
				<Typography variant='h6' color='#3d3d3e'>
					{abilityName}
				</Typography>
			</AbilityNameContainerStyles>

			<CounterStyles
				variant='outlined'
				disabled={!isAbleToIncrease}
				onClick={() => handleChangeProfile(abilityName, 'increase')}
			>
				<Typography variant='h6'>+</Typography>
			</CounterStyles>
			<AbilityValueContainerStyles>
				<Typography variant='h6' color='#3d3d3e'>
					{abilityValue}
				</Typography>
			</AbilityValueContainerStyles>
			<CounterStyles
				variant='outlined'
				disabled={!isAbleToDecrease}
				onClick={() => handleChangeProfile(abilityName, 'decrease')}
			>
				<Typography variant='h6'>-</Typography>
			</CounterStyles>
		</ContainerStyles>
	);
};

export default AbilityCounter;
