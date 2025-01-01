import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_API_URL } from './Constants';

export function processRequest(url = '', method = 'GET', data = {}) {
	let headers = {
		'Content-Type': 'application/json',
	};

	const accessToken = Cookies.get('accessToken');

	if (accessToken) {
		headers = { ...headers, 'Auth-Token': accessToken };
		// baseVar.authentication = true;
	} else {
		delete headers['Auth-Token'];
	}

	if (method === 'GET' && data) {
		const params = new URLSearchParams(data).toString();
		url = `${url}?${params}`;
	}

	return axios({
		headers,
		method,
		data: JSON.stringify(data),
		crossDomain: true,
		mode: 'cors',
		url: BASE_API_URL + url,
	});
}
