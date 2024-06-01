import '../styles/packages_section.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as gameRequestActions from '../../../components/modals/gameRequest/Actions';
import cry1 from '../../../images/illustrations/crystal-1.svg';
import cry2 from '../../../images/illustrations/crystal-2.svg';
import Button from '../../../components/button/Button';

const Packages = ({ blockRef, toggleGameRequestModal }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section packages-section">
			<div className="container">
				<h2 className="section-title">{t('main_page.packages.title')}</h2>
				<div className="row">
					<div className="col s-6">
						<div className="package">
							<img src={cry1} alt="illustration" className="package-img" />
							<h3 className="package-title">
								{t('main_page.packages.package_1.title')}
							</h3>
							<p className="package-desc">
								{t('main_page.packages.package_1.description')}
							</p>
							<span className="package-divider" />
							<ul className="package-usp">
								{Array(5)
									.fill('')
									.map((el, index) => (
										<li key={index} className="package-usp-item">
											{t(`main_page.packages.package_1.options.${index + 1}`)}
										</li>
									))}
							</ul>
							<Button
								title={t('main_page.packages.btn')}
								className="package-btn"
								onClick={() =>
									toggleGameRequestModal({ open: true, type: 'individual' })
								}
							/>
						</div>
					</div>
					<div className="col s-6">
						<div className="package">
							<img src={cry2} alt="illustration" className="package-img" />
							<h3 className="package-title">
								{t('main_page.packages.package_2.title')}
							</h3>
							<p className="package-desc">
								{t('main_page.packages.package_2.description')}
							</p>
							<span className="package-divider" />
							<ul className="package-usp">
								{Array(5)
									.fill('')
									.map((el, index) => (
										<li key={index} className="package-usp-item">
											{t(`main_page.packages.package_2.options.${index + 1}`)}
										</li>
									))}
							</ul>
							<Button
								title={t('main_page.packages.btn')}
								className="package-btn"
								onClick={() =>
									toggleGameRequestModal({ open: true, type: 'group' })
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	toggleGameRequestModal: gameRequestActions.toggleGameRequestModal,
};

export default connect(null, mapDispatchToProps)(memo(Packages));
