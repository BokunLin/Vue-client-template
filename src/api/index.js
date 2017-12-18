import axios from './axios';

export function login({ user, pw }) {
	return axios.post('/api/login', {
		user,
		pw
	})
}

