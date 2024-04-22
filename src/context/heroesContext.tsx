import { Profile } from '@/apis/type';
import { HeroProfile } from '@/features/heroes/components/HeroProfile/type';
import { useGetHeroById, useUpdateHeroProfile } from '@/hooks';
import { decreaseValue, increaseValue } from '@/utils';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const HeroesContext = createContext({
	heroProfile: [] as HeroProfile[],
	isHeroProfileLoading: false,
	total: 0,
	remaining: 0,
	handleChangeProfile: (_key: keyof Profile, _action: 'increase' | 'decrease') => {},
	saveProfile: () => {},
	isUpdateHeroProfileLoading: false,
});

export const useHeroes = () => {
	const { id: heroId } = useParams();
	const { data, isLoading: isHeroProfileLoading } = useGetHeroById(heroId || '');
	const [heroProfile, setHeroProfile] = useState<HeroProfile[]>([]);
	const updateHeroProfile = useUpdateHeroProfile();

	const total = (data?.str || 0) + (data?.int || 0) + (data?.agi || 0) + (data?.luk || 0);
	const currentValueSum = heroProfile.reduce((acc, cur) => acc + cur.value, 0);
	const remaining = total - currentValueSum;

	const handleChangeProfile = (key: keyof Profile, action: 'increase' | 'decrease') => {
		if (action === 'increase') {
			setHeroProfile((prev) => {
				if (!prev) return [];
				const currentProfileValueSum = prev.reduce((acc, cur) => acc + cur.value, 0);
				if (currentProfileValueSum === total) return prev;
				return increaseValue(prev, key);
			});
		}
		if (action === 'decrease') {
			setHeroProfile((prev) => {
				if (!prev) return [];
				if (prev.find((item) => item.name === key)?.value === 0) return prev;
				return decreaseValue(prev, key);
			});
		}
	};

	const saveProfile = () => {
		const profile = heroProfile.reduce(
			(acc, cur) => {
				acc[cur.name] = cur.value;
				return acc;
			},
			{} as Record<keyof Profile, number>,
		);
		updateHeroProfile.mutateAsync({
			id: heroId || '',
			profile,
		});
	};

	useEffect(() => {
		if (data) {
			const profile = Object.keys(data).map((key) => ({
				name: key as keyof Profile,
				value: data[key as keyof Profile],
			}));
			setHeroProfile(profile);
		}
	}, [data]);

	return {
		heroProfile,
		isHeroProfileLoading,
		total,
		remaining,
		handleChangeProfile,
		saveProfile,
		isUpdateHeroProfileLoading: updateHeroProfile.isPending,
	};
};

export const HeroesProvider = ({ children }: { children: ReactNode }) => {
	const value = useHeroes();
	return <HeroesContext.Provider value={value}>{children}</HeroesContext.Provider>;
};
