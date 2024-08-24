import '../styles/tower.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import towerImg from '../images/T1.png';
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
