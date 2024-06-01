import '../styles/managers_section.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import m1 from '../../../images/illustrations/m1.png';
import m2 from '../../../images/illustrations/m2.png';

const Managers = ({ blockRef }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section managers-section">
			<div className="container">
				<h2 className="section-title">{t('main_page.managers.title')}</h2>
				<div className="row">
					<div className="col s-6 l-4 l-offset-2">
						<div className="manager left-side">
							<img src={m1} alt="photo" className="manager-img" />
							<div className="manager-info">
								<h4 className="manager-name">
									{t('main_page.managers.manager_1.name')}
								</h4>
								<p className="manager-desc">
									{t('main_page.managers.manager_1.subject')}
								</p>
								<p className="manager-desc sub">
									{t('main_page.managers.manager_1.description')}
								</p>
							</div>
						</div>
					</div>
					<div className="col s-6 l-4">
						<div className="manager right-side">
							<img src={m2} alt="photo" className="manager-img" />
							<div className="manager-info">
								<h4 className="manager-name">
									{t('main_page.managers.manager_1.name')}
								</h4>
								<p className="manager-desc">
									{t('main_page.managers.manager_1.subject')}
								</p>
								<p className="manager-desc sub">
									{t('main_page.managers.manager_1.description')}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Managers);
