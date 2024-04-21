import { Navigate, Route, Routes } from 'react-router-dom';
import HeroProfile from '@/features/HeroProfile';
import HeroesLayout from '@/layout';

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
