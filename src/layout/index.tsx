import HeroList from '@/features/HeroList';
import { useGetHeroes } from '@/hooks';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const HeroesLayout = () => {
	const { data, isLoading, isError } = useGetHeroes();

	return (
		<Box
			sx={{
				padding: '40px 20px',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<HeroList heroes={data || []} isLoading={isLoading} isError={isError} />
			<Outlet />
		</Box>
	);
};

export default HeroesLayout;
