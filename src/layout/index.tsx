import HeroList from '@/features/HeroList';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const HeroesLayout = () => {
	return (
		<Box
			sx={{
				padding: '40px 20px',
				maxWidth: '1200px',
				margin: '0 auto',
			}}
		>
			<HeroList />
			<Outlet />
		</Box>
	);
};

export default HeroesLayout;
