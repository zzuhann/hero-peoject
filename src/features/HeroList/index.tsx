import HeroCard from '@/components/HeroCard';
import { useParams } from 'react-router-dom';
import { ContainerStyles } from './style';
import { useGetHeroes } from '@/hooks';
import SkeletonBox from '@/components/Skeleton';

const HeroList = () => {
	const { data: heroes, isLoading } = useGetHeroes();
	const { id: currentId } = useParams();

	return (
		<ContainerStyles>
			{isLoading && <SkeletonBox count={4} width={250} height={300} variant='rectangular' />}
			{!isLoading &&
				heroes?.map(({ id, name, image }) => (
					<HeroCard key={id} id={id} name={name} imageUrl={image} isActive={currentId === id} />
				))}
		</ContainerStyles>
	);
};

export default HeroList;
