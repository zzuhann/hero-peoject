import { Hero, Profile } from './type';
import instance from './instance';

const apis = {
	getHeroes: (): Promise<Hero[]> => {
		return instance.get('/heroes');
	},
	getHeroById: (id: string): Promise<Profile> => {
		return instance.get(`/heroes/${id}/profile`);
	},
	updateHeroProfile: (id: string, data: Profile): Promise<Profile> => {
		return instance.patch(`/heroes/${id}/profile`, data);
	},
};

export default apis;
