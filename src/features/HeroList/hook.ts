import { useGetHeroes } from '@/hooks';

export const useHeroes = () => {
	const { data, isLoading, isError } = useGetHeroes();
	return { heroes: data, isLoading, isError };
};
