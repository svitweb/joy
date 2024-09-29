import '../styles/tower.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import towerImg from '../images/tower.png';
import towerLightImg from '../images/light.png';
import towerLightBg from '../images/lightBack.png';
import towerShadow from '../images/shadow.png';
import * as gameActions from '../Actions.js';
import * as towerModalActions from '../../../components/modals/tower/Actions.js';
import Button from '../../../components/button/Button';
import { useTranslation } from 'react-i18next';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import tBg from '../images/bg.jpg';
import * as audioVisualizationActions from '../../../components/audioVisualization/Actions';

const Tower = ({ gameData, changeData, toggleTowerModal, disabledParallax }) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, completed } = tower || {};

	const handleClick = () => {
		if (active) {
			changeData({
				...gameData,
				tower: { active: true, completed: Math.floor(Math.random() * 30) },
			});
			return;
		}
		toggleTowerModal({ open: true });
	};

	return completed ? (
		// <div className="col">
		<div className="final-block">
			<h1 className="title">{t(`tower.response.${completed}`)}</h1>
			<Button onClick={() => changeData({})} title="RESET" />
		</div>
	) : (
		<ParallaxBanner className="parallax-banner" disabled={disabledParallax}>
			<ParallaxBannerLayer
				image={disabledParallax ? undefined : tBg}
				speed={10}
				className="parallax-bg"
				disabled={disabledParallax}
			/>
			<Parallax
				speed={-100}
				translateY={[50, -50]}
				className="labyrinth-section-parallax"
				disabled={disabledParallax}
			>
				<div className="tower">
					<img
						src={towerImg}
						className="tower-figure"
						alt="tower"
						onClick={handleClick}
					/>
					<div className="tower-light">
						{!!active && (
							<>
								<img src={towerLightImg} className="tower-light-img" alt="light" />
								<img src={towerLightBg} className="tower-light-bg" alt="light" />
							</>
						)}
					</div>
					{!active && (
						<img src={towerShadow} className="tower-figure-shadow" alt="light" />
					)}
				</div>
			</Parallax>
		</ParallaxBanner>
	);
};

const mapStateToProps = ({ gamePageReducer }) => ({
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleTowerModal: towerModalActions.toggleTowerModal,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Tower));
