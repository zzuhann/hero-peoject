import axios, { AxiosResponse } from 'axios';
import { Hero } from './type';

const heroesInstance = axios.create({
	baseURL: 'https://hahow-recruit.herokuapp.com',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

const onResponse = (response: AxiosResponse) => {
	const { status } = response;
	if (status >= 200 && status <= 299) {
		return response.data;
	}
	return response;
};

heroesInstance.interceptors.response.use(onResponse);

const apis = {
	getHeroes: (): Promise<Hero[]> => {
		return heroesInstance.get('/heroes');
	},
};

export default apis;
