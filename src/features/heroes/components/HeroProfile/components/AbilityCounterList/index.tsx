import { Profile } from '@/apis/type';
import { ContainerStyles } from './style';
import AbilityCounter from './components/AbilityCounter';

type Props = {
	abilities: { name: keyof Profile; value: number }[];
	remaining: number;
	handleChangeProfile: (key: keyof Profile, action: 'increase' | 'decrease') => void;
};

const AbilityCounterList = ({ abilities, remaining, handleChangeProfile }: Props) => {
	return (
		<ContainerStyles>
			{abilities.map((ability) => (
				<AbilityCounter
					key={ability.name}
					abilityName={ability.name}
					abilityValue={ability.value}
					isAbleToIncrease={remaining > 0}
					isAbleToDecrease={ability.value > 0}
					handleChangeProfile={handleChangeProfile}
				/>
			))}
		</ContainerStyles>
	);
};

export default AbilityCounterList;
