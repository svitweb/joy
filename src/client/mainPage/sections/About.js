import '../styles/about_section.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Spiral from '../../../images/illustrations/spiral';
import LabyrinthImg from '../../../images/illustrations/labyrinth';

const About = ({ blockRef }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section about-section">
			<Spiral />
			<LabyrinthImg />
			<div className="container">
				<div className="row">
					<div className="col s-8 m-6 s-offset-2 m-offset-3">
						<p className="sup-text">{t('main_page.about.sup_description')}</p>
						<h2 className="section-title"> {t('main_page.about.title')}</h2>
						<p className="desc">{t('main_page.about.description')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(About);
