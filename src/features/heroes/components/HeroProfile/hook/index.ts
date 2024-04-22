import { Profile } from '@/apis/type';
import { useGetHeroById, useUpdateHeroProfile } from '@/hooks';
import { useEffect, useState } from 'react';
import { HeroProfile } from '../type';
import { decreaseValue, increaseValue } from '../utils';

export const useHeroProfile = (heroId: string) => {
	const { data, isLoading: isHeroProfileLoading } = useGetHeroById(heroId);
	const [heroProfile, setHeroProfile] = useState<HeroProfile[]>([]);
	const updateHeroProfile = useUpdateHeroProfile();

	const total = (data?.str || 0) + (data?.int || 0) + (data?.agi || 0) + (data?.luk || 0);
	const currentProfileValueSum = heroProfile.reduce((acc, cur) => acc + cur.value, 0);
	const remaining = total - currentProfileValueSum;

	const handleChangeProfile = (key: keyof Profile, action: 'increase' | 'decrease') => {
		if (!heroProfile) return;
		if (action === 'increase') {
			setHeroProfile((prev) => {
				if (!prev) return [];
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
			id: heroId,
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
