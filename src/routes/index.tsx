import { Navigate, Route, Routes } from 'react-router-dom';
import HeroPages from '@/pages/heroes';
import HeroProfile from '@/features/HeroProfile';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/heroes' />} />
			<Route path='/heroes' element={<HeroPages />}>
				<Route path='' element={<div>123</div>} />
				<Route path=':id' element={<HeroProfile />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
