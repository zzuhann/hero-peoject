import { Profile } from '@/apis/type';
import { useGetHeroById } from '@/hooks';
import { useEffect, useState } from 'react';
import { HeroProfile } from '../type';
import { decreaseValue, increaseValue } from '../utils';

export const useHeroProfile = (heroId: string) => {
	const { data, isLoading } = useGetHeroById(heroId);
	const [heroProfile, setHeroProfile] = useState<HeroProfile[]>([]);

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
		isLoading,
		heroProfile,
		total,
		handleChangeProfile,
		remaining,
	};
};
