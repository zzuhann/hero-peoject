import { Profile } from '@/apis/type';
import { useGetHeroById } from '@/hooks';
import { useEffect, useState } from 'react';

type HeroProfile = { name: keyof Profile; value: number };

export const useHeroProfile = (heroId: string) => {
	const { data } = useGetHeroById(heroId);
	const [heroProfile, setHeroProfile] = useState<HeroProfile[]>([]);

	const total = (data?.str || 0) + (data?.int || 0) + (data?.agi || 0) + (data?.luk || 0);
	const currentProfileValueSum = heroProfile.reduce((acc, cur) => acc + cur.value, 0);

	const handleChangeProfile = (key: keyof Profile, action: 'increase' | 'decrease') => {
		if (!heroProfile) return;
		if (action === 'increase') {
			setHeroProfile((prev) => {
				if (!prev) return [];
				if (currentProfileValueSum === total) return prev;
				return prev.map((item) => {
					if (item.name === key) {
						return {
							...item,
							value: item.value + 1,
						};
					}
					return item;
				});
			});
		}
		if (action === 'decrease') {
			setHeroProfile((prev) => {
				if (!prev) return [];
				if (prev.find((item) => item.name === key)?.value === 0) return prev;
				return prev.map((item) => {
					if (item.name === key) {
						return {
							...item,
							value: item.value - 1,
						};
					}
					return item;
				});
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
		heroProfile,
		total,
		handleChangeProfile,
	};
};
