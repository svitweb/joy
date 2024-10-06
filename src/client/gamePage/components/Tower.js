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
import classNames from 'classnames';

const Tower = ({ className, gameData, changeData, toggleTowerModal }) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, response, completed } = tower || {};

	const handleClick = () => {
		// if (active && !response) {
		// 	changeData({
		// 		...gameData,
		// 		tower: { active: true, response: Math.floor(Math.random() * 30) },
		// 	});
		// }
		toggleTowerModal({ open: true });
	};

	return (
		<div
			className={classNames(className, {
				'col s-4 s-offset-4 tower-col': true,
				col: completed,
			})}
		>
			{completed ? (
				<div className="final-block">
					<h1 className="title">GAME DONE</h1>
					<Button onClick={() => changeData({})} title="RESET" />
				</div>
			) : (
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
