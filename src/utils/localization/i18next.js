import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uaLocale from './uaLocale.json';
import ruLocale from './ruLocale.json';
import enLocale from './enLocale.json';
import { getLocalStorageItem, getSystemLanguage } from '../../services/Helper';

i18n.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			ua: {
				translation: {
					...uaLocale,
				},
			},
			ru: {
				translation: {
					...ruLocale,
				},
			},
			en: {
				translation: {
					...enLocale,
				},
			},
		},
		whiteList: ['ua', 'ru', 'en'],
		lng: getLocalStorageItem('language') || getSystemLanguage(),
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		returnEmptyString: false,
	});

export default i18n;
