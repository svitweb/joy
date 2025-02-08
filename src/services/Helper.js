import { AVAILABLE_LANGUAGES } from './Constants';

export function Timer(callback, delay) {
	let timerId,
		start,
		remaining = delay;

	this.pause = () => {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};

	this.resume = () => {
		start = new Date();
		window.clearTimeout(timerId);
		timerId = window.setTimeout(callback, remaining);
	};

	this.resume();
}

export const setLocalStorageItem = (key, value) => {
	window.localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key) => window.localStorage.getItem(key);

export const getSystemLanguage = () => {
	const systemLanguage = navigator?.language || navigator?.userLanguage;
	const languageCode = systemLanguage?.split('-')[1]?.toLowerCase();

	return languageCode && AVAILABLE_LANGUAGES.includes(languageCode) ? languageCode : 'en';
};
