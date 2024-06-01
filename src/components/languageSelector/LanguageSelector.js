import './style.scss';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { getLocalStorageItem, getSystemLanguage, setLocalStorageItem } from '../../services/Helper';
import { AVAILABLE_LANGUAGES } from '../../services/Constants';
import { useLanguage } from '../../services/LanguageContext';

const LanguageSelector = ({ className }) => {
	const node = useRef();

	const { i18n } = useTranslation();
	const { setLanguage } = useLanguage();

	const [selectedLanguage, setSelectedLanguage] = useState(
		getLocalStorageItem('language') || getSystemLanguage(),
	);
	const [active, setActive] = useState(false);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (e) => {
		if (!e.target?.closest('.language-selector')) setActive(false);
	};

	const handleChangeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setLocalStorageItem('language', lng);
		setSelectedLanguage(lng);
		setActive(false);
		setLanguage(lng);
	};

	return (
		<div ref={node} className={classNames('language-selector', className)}>
			<button
				className="language-selector-btn main"
				type="button"
				onClick={() => {
					setActive((prevState) => !prevState);
				}}
			>
				{selectedLanguage}
			</button>
			<ul className={classNames('language-selector-list', { active })}>
				{AVAILABLE_LANGUAGES.map((lng) => (
					<li key={lng}>
						<button
							className={classNames('language-selector-btn', {
								hide: selectedLanguage === lng,
							})}
							type="button"
							onClick={() => handleChangeLanguage(lng)}
						>
							{lng}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default memo(LanguageSelector);
