import { Outlet } from 'react-router-dom';
import HeroList from '@/features/heroes/components/HeroList';
import { ContainerStyles } from './style';

const HeroesLayout = () => {
	return (
		<ContainerStyles>
			<HeroList />
			<Outlet />
		</ContainerStyles>
	);
};

export default HeroesLayout;
