import HeroCard from '@/components/HeroCard';
import { useMemo } from 'react';
import { Hero } from '@/apis/type';
import { useParams } from 'react-router-dom';
import { ContainerStyles } from './style';

type Props = {
	heroes: Hero[];
	isLoading: boolean;
	isError: boolean;
};

const HeroList = ({ heroes }: Props) => {
	const heroesMemo = useMemo(() => heroes, [heroes]);
	const { id: currentId } = useParams();

	return (
		<ContainerStyles>
			{heroesMemo?.map(({ id, name, image }) => (
				<HeroCard key={id} id={id} name={name} imageUrl={image} isActive={currentId === id} />
			))}
		</ContainerStyles>
	);
};

export default HeroList;
