import apis from '@/apis';
import { Profile } from '@/apis/type';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useGetHeroes = () => {
	return useQuery({
		queryKey: ['heroes'],
		queryFn: async () => {
			const data = await apis.getHeroes();
			if (data) {
				return data;
			} else {
				toast.error('找不到英雄');
			}
		},
	});
};

export const useGetHeroById = (id: string) => {
	return useQuery({
		queryKey: ['hero', id],
		staleTime: 1000 * 60 * 5,
		enabled: !!id,
		queryFn: async () => {
			const data = await apis.getHeroById(id);
			if (data) {
				return data;
			} else {
				toast.error('找不到英雄');
			}
		},
	});
};

export const useUpdateHeroProfile = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ id, profile }: { id: string; profile: Profile }) => {
			return apis.updateHeroProfile(id, profile);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['hero'] });
			toast.success('儲存成功');
		},
		onError: () => {
			toast.error('儲存失敗');
		},
	});
};
