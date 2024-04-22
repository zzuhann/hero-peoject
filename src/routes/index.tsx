import { Navigate, Route, Routes } from 'react-router-dom';
import HeroesLayout from '@/layout';
import HeroProfile from '@/features/heroes/components/HeroProfile';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/heroes' />} />
			<Route path='/heroes' element={<HeroesLayout />}>
				<Route path=':id' element={<HeroProfile />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
