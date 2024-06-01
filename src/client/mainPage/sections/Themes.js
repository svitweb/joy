import '../styles/themes_section.scss';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import listImg1 from '../../../images/illustrations/list-img-1.png';
import listImg1S from '../../../images/illustrations/list-img-1-s.png';
import listImg2 from '../../../images/illustrations/list-img-2.png';
import listImg3 from '../../../images/illustrations/list-img-3.png';
import listImg4 from '../../../images/illustrations/list-img-4.png';
import spiralImg from '../../../images/illustrations/spiral-2.svg';
import labyrinthImg from '../../../images/illustrations/labyrinth.svg';

const Themes = ({ blockRef }) => {
	const { t } = useTranslation();

	return (
		<div ref={blockRef} className="page-section themes-section">
			<div className="container">
				<h2 className="section-title">{t('main_page.themes.title')}</h2>
				<p className="subtitle">{t('main_page.themes.description')}</p>
				<div className="themes-section-blocks">
					<div className="themes-section-block">
						<div className="img-wrap text-right">
							<picture className="img">
								<source
									type="image/png"
									srcSet={listImg1}
									media="(min-width: 0px) and (max-width: 767px)"
									width="128"
									height="190"
								/>
								<img
									className="recorder-img"
									alt="illustration"
									width="363"
									height="246"
									src={listImg1S}
								/>
							</picture>
						</div>
						<div className="img-wrap text-right">
							<img
								src={spiralImg}
								alt="illustration"
								className="img spiral-img hide-s hide-m"
								width="64"
								height="64"
							/>
						</div>
						<div className="desc-block">
							<p className="desc">{t('main_page.themes.options.1')}</p>
							<p className="desc">{t('main_page.themes.options.2')}</p>
						</div>
						<div className="desc-block">
							<p className="desc">{t('main_page.themes.options.3')}</p>
							<p className="desc">{t('main_page.themes.options.4')}</p>
							<p className="desc">{t('main_page.themes.options.5')}</p>
						</div>
						<div className="img-wrap text-right">
							<picture className="img">
								<source
									type="image/png"
									srcSet={listImg4}
									media="(min-width: 0px) and (max-width: 767px)"
									width="68"
									height="68"
								/>
								<img src={listImg4} alt="illustration" width="166" height="166" />
							</picture>
						</div>
					</div>
					<div className="themes-section-block">
						<div className="desc-block">
							<p className="desc">{t('main_page.themes.options.6')}</p>
							<p className="desc">{t('main_page.themes.options.7')}</p>
							<p className="desc">{t('main_page.themes.options.8')}</p>
						</div>
						<div className="desc-block">
							<p className="desc">{t('main_page.themes.options.9')}</p>
							<p className="desc">{t('main_page.themes.options.10')}</p>
						</div>
						<div className="img-wrap text-center float-img-wrap hide-s hide-m">
							<picture className="img">
								<source
									type="image/png"
									srcSet={listImg2}
									media="(min-width: 0px) and (max-width: 767px)"
									width="90"
									height="90"
								/>
								<img
									src={listImg2}
									alt="illustration"
									className="float-img"
									width="168"
									height="168"
								/>
							</picture>
						</div>
						<div className="img-wrap text-right hide-s hide-m hide-l">
							<img
								src={labyrinthImg}
								alt="illustration"
								className="img labyrinth-img hide-s hide-m hide-l"
								width="72"
								height="72"
							/>
						</div>
						<div className="img-wrap text-center block-general-img">
							<picture className="img">
								<source
									type="image/png"
									srcSet={listImg3}
									media="(min-width: 0px) and (max-width: 767px)"
									width="128"
									height="81"
								/>
								<img
									src={listImg3}
									alt="illustration"
									className="img"
									width="363"
									height="228"
								/>
							</picture>
						</div>
						<div className="desc-block">
							<p className="desc">{t('main_page.themes.options.11')}</p>
							<p className="desc">{t('main_page.themes.options.12')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Themes);
