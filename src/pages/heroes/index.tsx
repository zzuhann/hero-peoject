import { Outlet } from 'react-router-dom';
import HeroList from '../../features/HeroList';

const HeroPages = () => {
	return (
		<>
			<HeroList />
			<Outlet />
		</>
	);
};

export default HeroPages;
