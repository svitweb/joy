const PRODUCTION_API_URL = 'https://upgradenjag-be.vercel.app';
const DEV_API_URL = 'http://localhost:3030';
// const DEV_API_URL = 'https://upgradenjag-be.vercel.app';

const PRODUCTION_URL = 'https://upgradego.com';
const DEV_URL = 'http://localhost:3000';

export const BRAND_NAME = 'UPGRADE';

export const BASE_URL = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEV_URL;

export const BASE_API_URL =
	process.env.NODE_ENV === 'production' ? PRODUCTION_API_URL : DEV_API_URL;

export const baseVar = { authentication: false };

export const COOKIES = { accessToken: null };

export const AVAILABLE_LANGUAGES = ['ua', 'en', 'ru'];

export const LABYRINTH_MAIN_OBJ_QUESTIONS_LENGTH = 30;
