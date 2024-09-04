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

const Tower = ({ gameData, changeData, toggleTowerModal }) => {
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
		<div className="col">
			<div className="final-block">
				<h1 className="title">{t(`tower.response.${completed}`)}</h1>
				<Button onClick={() => changeData({})} title="RESET" />
			</div>
		</div>
	) : (
		<div className="col l-4 l-offset-4 tower-col">
			<div className="tower">
				<img src={towerImg} className="tower-figure" alt="tower" onClick={handleClick} />
				<div className="tower-light">
					{!!active && (
						<>
							<img src={towerLightImg} className="tower-light-img" alt="light" />
							<img src={towerLightBg} className="tower-light-bg" alt="light" />
						</>
					)}
				</div>
				{!active && <img src={towerShadow} className="tower-figure-shadow" alt="light" />}
			</div>
		</div>
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
