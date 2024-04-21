import { Navigate, createBrowserRouter } from 'react-router-dom';
import HeroPages from '@/pages/heroes';

const routes = [
	{
		path: '/',
		element: <Navigate to='/heroes' />,
	},
	{
		path: '/heroes',
		element: <HeroPages />,
		children: [
			{
				path: '',
				element: <></>,
			},
			{
				path: ':id',
				element: <div>heroById</div>,
			},
		],
	},
];

export default createBrowserRouter(routes);
