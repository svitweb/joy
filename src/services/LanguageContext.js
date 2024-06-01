import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';
import { getLocalStorageItem, getSystemLanguage } from './Helper';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		getLocalStorageItem('language') || getSystemLanguage(),
	);

	useEffect(() => {
		i18n.on('languageChanged', (lng) => {
			setLanguage(lng);
		});

		return () => {
			i18n.off('languageChanged');
		};
	}, []);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
