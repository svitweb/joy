import '../styles/themes_section.scss';
import React, { memo } from 'react';
import listImg1 from '../../../images/illustrations/list-img-1.png';
import listImg1S from '../../../images/illustrations/list-img-1-s.png';
import listImg2 from '../../../images/illustrations/list-img-2.png';
import listImg3 from '../../../images/illustrations/list-img-3.png';
import listImg4 from '../../../images/illustrations/list-img-4.png';
import spiralImg from '../../../images/illustrations/spiral-2.svg';
import labyrinthImg from '../../../images/illustrations/labyrinth.svg';

const Themes = () => (
	<div className="page-section themes-section">
		<div className="container">
			<h2 className="section-title">ВАШ МИР ПЕРЕМЕН</h2>
			<p className="subtitle">Эта игра поможет Вам:</p>
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
						<p className="desc">проанализировать текущее положение дела; </p>
						<p className="desc">построить выгодную стратегию;</p>
					</div>
					<div className="desc-block">
						<p className="desc">выявить дальнейший путь;</p>
						<p className="desc">принять верное решение;</p>
						<p className="desc">сделать правильный выбор;</p>
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
						<p className="desc">открыть свои слепые зоны;</p>
						<p className="desc">увидеть ограничения;</p>
						<p className="desc">обнаружить возможности и ресурсы;</p>
					</div>
					<div className="desc-block">
						<p className="desc">получить инсайт;</p>
						<p className="desc">зарядиться позитивной энергией;</p>
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
						<p className="desc">разобраться в себе;</p>
						<p className="desc">понять свои желания.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default memo(Themes);
