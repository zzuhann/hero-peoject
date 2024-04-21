import HeroCard from '@/components/HeroCard';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { Hero } from '@/apis/type';
import { useParams } from 'react-router-dom';

type Props = {
	heroes: Hero[];
	isLoading: boolean;
	isError: boolean;
};

const HeroList = ({ heroes }: Props) => {
	const heroesMemo = useMemo(() => heroes, [heroes]);
	const { id: currentId } = useParams();

	return (
		<Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
			{heroesMemo?.map(({ id, name, image }) => (
				<HeroCard key={id} id={id} name={name} imageUrl={image} isActive={currentId === id} />
			))}
		</Box>
	);
};

export default HeroList;
