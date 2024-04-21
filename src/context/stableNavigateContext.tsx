import { createContext, useContext, useRef, MutableRefObject } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

const StableNavigateContext = createContext<MutableRefObject<NavigateFunction> | null>(null);

export const StableNavigateContextProvider = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const navigateRef = useRef(navigate);

	return (
		<StableNavigateContext.Provider value={navigateRef}>{children}</StableNavigateContext.Provider>
	);
};

export const useStableNavigate = (): NavigateFunction => {
	const navigateRef = useContext(StableNavigateContext);
	if (!navigateRef || navigateRef?.current === null)
		throw new Error('StableNavigate context is not initialized');

	return navigateRef.current;
};
