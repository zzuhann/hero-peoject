import { Navigate, Route, Routes } from 'react-router-dom';
import HeroPages from '@/pages/heroes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/heroes' />} />
			<Route path='/heroes' element={<HeroPages />}>
				<Route path='' element={<div>123</div>} />
				<Route path=':id' element={<div>heroById</div>} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
