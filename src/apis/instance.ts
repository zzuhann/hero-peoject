import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
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

instance.interceptors.response.use(onResponse);

export default instance;
