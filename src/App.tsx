import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StableNavigateContextProvider } from './context';
import AppRoutes from './routes';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<StableNavigateContextProvider>
					<AppRoutes />
				</StableNavigateContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
