import HeroCard from '@/components/HeroCard';
import { useHeroes } from './hook';
import { Box } from '@mui/material';

const HeroList = () => {
	const { heroes, isLoading, isError } = useHeroes();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;

	return (
		<Box sx={{ display: 'flex', gap: '20px' }}>
			{heroes?.map((hero) => <HeroCard key={hero.id} name={hero.name} imageUrl={hero.image} />)}
		</Box>
	);
};

export default HeroList;
