import { decreaseValue, increaseValue } from '.';
import { HeroProfile } from '../type';

test('increase 1 on correct name', () => {
	const prevProfile: HeroProfile[] = [
		{ name: 'str', value: 1 },
		{ name: 'int', value: 1 },
		{ name: 'agi', value: 1 },
		{ name: 'luk', value: 1 },
	];

	const currProfile = increaseValue(prevProfile, 'str');

	expect(currProfile).toEqual([
		{ name: 'str', value: 2 },
		{ name: 'int', value: 1 },
		{ name: 'agi', value: 1 },
		{ name: 'luk', value: 1 },
	]);
});

test('decrease 1 on correct name', () => {
	const prevProfile: HeroProfile[] = [
		{ name: 'str', value: 1 },
		{ name: 'int', value: 2 },
		{ name: 'agi', value: 3 },
		{ name: 'luk', value: 1 },
	];

	const currProfile = decreaseValue(prevProfile, 'agi');

	expect(currProfile).toEqual([
		{ name: 'str', value: 1 },
		{ name: 'int', value: 2 },
		{ name: 'agi', value: 2 },
		{ name: 'luk', value: 1 },
	]);
});
