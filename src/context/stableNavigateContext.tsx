import { createContext, useContext, useRef, MutableRefObject } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

// 在 component 內使用 useNavigate，每次呼叫 navigate 都會 rerender
// 確保 navigate 函數在組件重新渲染時保持不變，從而避免不必要的重新渲染
// 參考 https://shallowdepth.online/posts/2022/04/why-usenavigate-hook-in-react-router-v6-triggers-waste-re-renders-and-how-to-solve-it/
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
