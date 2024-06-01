import '../styles/topics_section.scss';
import React, { useEffect, useRef, memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Swiper from 'swiper';
import Spiral from '../../../images/illustrations/spiral';
import Labyrinth from '../../../images/illustrations/labyrinth';

const Topics = ({ blockRef }) => {
	const { t } = useTranslation();

	const submenu = useRef(null);
	const submenuItems = useRef(null);
	const swiper = useRef(null);

	useEffect(() => {
		window.addEventListener('resize', initiateSwiper);
		initiateSwiper();

		return () => {
			window.removeEventListener('resize', initiateSwiper);
		};
	}, []);

	const initiateSwiper = () => {
		const submenuNode = submenu.current;

		if (window.innerWidth < 1024) {
			swiper.current = new Swiper(submenuNode, {
				slidesPerView: 'auto',
				containerModifierClass: 'swiper-',
			});
		} else if (swiper.current?.initialized) {
			swiper.current.destroy(true, true);
		}
	};

	return (
		<div ref={blockRef} className="page-section topics-section">
			<Spiral className="hide-xs hide-s hide-m" />
			<Labyrinth className="hide-xs hide-s hide-m" />
			<div className="container">
				<h2 className="section-title">{t('main_page.topics.title')}</h2>
				<p className="subtitle">{t('main_page.topics.description')}</p>
				<div ref={submenu} className="swiper-container">
					<div ref={submenuItems} className="row swiper-wrapper">
						{Array(8)
							.fill('')
							.map((el, index) => (
								<div key={index} className="col m-6 swiper-slide">
									<div className="topic">
										<span className="topic-name">
											<Trans
												i18nKey={`main_page.topics.options.${index + 1}`}
											/>
										</span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Topics);
