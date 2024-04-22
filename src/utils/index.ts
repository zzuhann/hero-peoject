import { Profile } from '@/apis/type';
import { HeroProfile } from '../features/heroes/components/HeroProfile/type';

export function increaseValue(prevProfile: HeroProfile[], key: keyof Profile) {
	return prevProfile.map((item) => {
		if (item.name === key) {
			return {
				...item,
				value: item.value + 1,
			};
		}
		return item;
	});
}

export function decreaseValue(prevProfile: HeroProfile[], key: keyof Profile) {
	return prevProfile.map((item) => {
		if (item.name === key) {
			return {
				...item,
				value: item.value - 1,
			};
		}
		return item;
	});
}
