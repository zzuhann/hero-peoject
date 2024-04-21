import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { StableNavigateContextProvider } from './context';
import AppRoutes from './routes';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Toaster position='bottom-left' />
			<BrowserRouter>
				<StableNavigateContextProvider>
					<AppRoutes />
				</StableNavigateContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
