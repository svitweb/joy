import '../styles/formats_section.scss';
import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import themeImg1 from '../../../images/illustrations/theme-img-1.png';
import themeImg2 from '../../../images/illustrations/theme-img-2.png';
import themeImg3 from '../../../images/illustrations/theme-img-3.png';

const Formats = ({ blockRef }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section formats-section">
			<h2 className="section-title">
				<Trans i18nKey="main_page.formats.title" />
			</h2>
			<div className="formats-section-body">
				<div className="container">
					<div className="row">
						<div className="block col xs-6 s-4 m-3">
							<h3 className="block-title">{t('main_page.formats.options.1')}</h3>
							<img src={themeImg1} alt="illustration" className="block-img" />
						</div>
						<div className="block col xs-6 s-4 m-3 s-offset-4 m-offset-6">
							<h3 className="block-title">{t('main_page.formats.options.2')}</h3>
							<img src={themeImg3} alt="illustration" className="block-img" />
						</div>
						<div className="block col s-4 s-offset-4 last-block">
							<img src={themeImg2} alt="illustration" className="block-img" />
							<h3 className="block-title">{t('main_page.formats.options.3')}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Formats);
