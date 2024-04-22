import { ContainerStyles } from './style';
import AbilityCounter from './components/AbilityCounter';
import { useContext } from 'react';
import { HeroesContext } from '@/context/heroesContext';

const AbilityCounterList = () => {
	const { heroProfile: abilities, remaining } = useContext(HeroesContext);

	return (
		<ContainerStyles>
			{abilities.map((ability) => (
				<AbilityCounter
					key={ability.name}
					abilityName={ability.name}
					abilityValue={ability.value}
					isAbleToIncrease={remaining > 0}
					isAbleToDecrease={ability.value > 0}
				/>
			))}
		</ContainerStyles>
	);
};

export default AbilityCounterList;
