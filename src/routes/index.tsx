import { Navigate, createBrowserRouter, Outlet } from 'react-router-dom';

const routes = [
	{
		path: '/',
		element: <Navigate to='/heroes' />,
	},
	{
		path: '/heroes',
		element: <Outlet />,
		children: [
			{
				path: '',
				element: <div>heroes</div>,
			},
			{
				path: ':id',
				element: <div>heroById</div>,
			},
		],
	},
];

export default createBrowserRouter(routes);
