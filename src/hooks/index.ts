import apis from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const useGetHeroes = () => {
	return useQuery({
		queryKey: ['heroes'],
		queryFn: async () => {
			const data = await apis.getHeroes();
			return data;
		},
	});
};

export const useGetHeroById = (id: string) => {
	return useQuery({
		queryKey: ['hero', id],
		enabled: !!id,
		queryFn: async () => {
			const data = await apis.getHeroById(id);
			return data;
		},
	});
};
