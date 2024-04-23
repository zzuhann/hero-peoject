import { Navigate, Route, Routes } from 'react-router-dom';
import HeroesLayout from '@/layout';
import HeroProfile from '@/features/heroes/components/HeroProfile';
import NotFoundPage from '@/pages/notFound';
import { HeroesProvider } from '@/context/heroesContext';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/heroes' />} />
			<Route path='/heroes' element={<HeroesLayout />}>
				<Route
					path=':id'
					element={
						<HeroesProvider>
							<HeroProfile />
						</HeroesProvider>
					}
				/>
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRoutes;
