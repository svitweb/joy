import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import logo from '../../../images/illustrations/logo.svg';
import Spiral from '../../../images/illustrations/spiral';
import Labyrinth from '../../../images/illustrations/labyrinth';
import Button from '../../../components/button/Button';
import Socials from '../../../components/socials/Socials';
import LanguageSelector from '../../languageSelector/LanguageSelector';

const Menu = ({ scrollToRef, blocks }) => {
	const { t } = useTranslation();

	const [active, setActive] = useState(false);

	useEffect(() => {
		const html = document.getElementsByTagName('html')[0];
		if (active) {
			html.classList.add('mobile-menu-active');
			return;
		}
		html.classList.remove('mobile-menu-active');
	}, [active]);

	const handleSwitchMenu = () => {
		setActive((prevState) => !prevState);
	};

	const handleNavigate = (block) => {
		if (block) scrollToRef(block);
		setActive(false);
	};

	return (
		<header className={classNames('menu', { active })}>
			<div className="container menu-main">
				<img src={logo} alt="logo" className="menu-logo" width="48" height="48" />
				<nav className="menu-nav">
					<Spiral className="hide-s hide-m hide-l" />
					<Labyrinth className="hide-s hide-m hide-l" />
					{Array(4)
						.fill('')
						.map((el, index) => (
							<button
								key={index}
								onClick={() => handleNavigate(blocks[index])}
								className="menu-nav-btn"
							>
								{t(`menu.items.${index + 1}`)}
							</button>
						))}
					<Socials className="large deco-line hide-s hide-m hide-l" />
					<span className="divider hide-s hide-m hide-l" />
					<Button
						title={t('menu.contact_btn')}
						className="white form-btn hide-s hide-m hide-l"
						onClick={() => handleNavigate(blocks[5])}
					/>

					<LanguageSelector className="hide show-xs" />
				</nav>
				<LanguageSelector className="hide-xs" />
				<button
					className={classNames('nav-btn hamburger hide-s hide-m hide-l', {
						active,
					})}
					onClick={handleSwitchMenu}
				>
					<span className="top-line" />
					<span className="mid-line" />
					<span className="bot-line" />
				</button>
			</div>
		</header>
	);
};

export default memo(Menu);
