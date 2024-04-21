import HeroCard from '@/components/HeroCard';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { Hero } from '@/apis/type';

type Props = {
	heroes: Hero[];
	isLoading: boolean;
	isError: boolean;
};

const HeroList = ({ heroes }: Props) => {
	const heroesMemo = useMemo(() => heroes, [heroes]);

	return (
		<Box sx={{ display: 'flex', gap: '20px' }}>
			{heroesMemo?.map((hero) => (
				<HeroCard key={hero.id} id={hero.id} name={hero.name} imageUrl={hero.image} />
			))}
		</Box>
	);
};

export default HeroList;
