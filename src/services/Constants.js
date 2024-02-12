const PRODUCTION_API_URL = 'https://api.playlisted.ml'; // todo:!! unhardcode
const DEV_API_URL = 'http://localhost:3030';
const PRODUCTION_URL = 'https://playlisted.ml';
const DEV_URL = 'http://localhost:4200';

export const BASE_API_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_API_URL : DEV_API_URL;
export const BASE_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEV_URL;
export const baseVar = {
	authentication: false
};
export const COOKIES = {
	accessToken: null,
};
