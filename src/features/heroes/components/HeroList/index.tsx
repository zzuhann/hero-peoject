import { ContainerStyles } from './style';
import { useGetHeroes } from '@/hooks';
import SkeletonBox from '@/components/Skeleton';
import { useParams } from 'react-router-dom';
import { useStableNavigate } from '@/context';
import HeroCard from './components/HeroCard';

const HeroList = () => {
	const { data: heroes, isLoading } = useGetHeroes();
	const { id: currentId } = useParams();
	const navigate = useStableNavigate();

	const isActive = (id: string) => (currentId ? currentId === id : true);

	const handleClickCard = (id: string) => {
		if (currentId === id) {
			navigate('heroes');
		} else {
			navigate(`/heroes/${id}`);
		}
	};

	return (
		<ContainerStyles>
			{isLoading && <SkeletonBox count={4} width={250} height={300} variant='rectangular' />}
			{!isLoading &&
				heroes?.map(({ id, name, image }) => (
					<HeroCard
						key={id}
						id={id}
						name={name}
						imageUrl={image}
						isActive={isActive(id)}
						onClick={() => handleClickCard(id)}
					/>
				))}
		</ContainerStyles>
	);
};

export default HeroList;
