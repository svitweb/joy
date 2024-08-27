import '../styles/tower.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import towerImg from '../images/t1.png';
import towerLightImg from '../images/light.png';
import towerLightBg from '../images/lightBack.png';
import towerShadow from '../images/shadow.png';
import * as gameActions from '../Actions.js';
import * as towerModalActions from '../../../components/modals/tower/Actions.js';

const Tower = ({ gameData, changeData, toggleTowerModal }) => {
	const { tower } = gameData || {};

	const handleClick = () => {
		toggleTowerModal({ open: true });
	};

	return (
		<div className="tower">
			<img src={towerImg} className="tower-figure" alt="tower" onClick={handleClick} />
			<div className="tower-light">
				{tower?.active && (
					<>
						<img src={towerLightImg} className="tower-light-img" alt="light" />
						<img src={towerLightBg} className="tower-light-bg" alt="light" />
					</>
				)}
			</div>
			{!tower?.active && (
				<img src={towerShadow} className="tower-figure-shadow" alt="light" />
			)}
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
