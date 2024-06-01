import './style.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import logoFull from '../../images/illustrations/logo-full.svg';
import Socials from '../../components/socials/Socials';

const Footer = ({ scrollToRef, blocks }) => {
	const { t } = useTranslation();

	const handleNavigate = (block) => {
		if (block) scrollToRef(block);
	};

	return (
		<footer className="main-footer">
			<div className="container">
				<div className="row">
					<div className="col s-4 m-6">
						<img src={logoFull} alt="logo" className="main-footer-logo" />
					</div>
					<div className="col xs-5 s-4 m-3">
						<h3 className="main-footer-title">{t('footer.menu')}</h3>
						<ul>
							{Array(5)
								.fill('')
								.map((el, index) => (
									<li key={index}>
										<button
											type="link"
											className="nav-btn"
											onClick={() => handleNavigate(blocks[index])}
										>
											{t(`menu.items.${index + 1}`)}
										</button>
									</li>
								))}
						</ul>
					</div>
					<div className="col xs-7 s-4 m-3 col-flex">
						<h3 className="main-footer-title">{t('footer.contacts')}</h3>
						<ul>
							<li>
								<a className="nav-btn" href="tel:+380671234567">
									+380 67 123 45 67
								</a>
							</li>
							<li>
								<a className="nav-btn" href="tel:+380507654321">
									+380 50 765 43 21
								</a>
							</li>
							<li>
								<a className="nav-btn" href="mailto:upgrade.tg@gmail.com">
									upgrade.tg@gmail.com
								</a>
							</li>
						</ul>
						<Socials />
					</div>
				</div>
				<span className="divider" />
				<p className="copyright">{t('footer.copyright')}</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
