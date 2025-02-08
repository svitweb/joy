import '../styles/tower.scss';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import towerImg from '../images/tower.png';
import towerLightImg from '../images/light.png';
import towerLightBg from '../images/lightBack.png';
import towerShadow from '../images/shadow.png';
import * as gameActions from '../Actions.js';
import * as towerModalActions from '../../../components/modals/tower/Actions.js';
import Button from '../../../components/button/Button';
import { historyPush } from '../../../services/History';

const Tower = ({ className, gameData, changeData, toggleTowerModal }) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, completed } = tower || {};

	const handleClick = () => {
		toggleTowerModal({ open: true });
	};

	return (
		<div
			className={classNames(className, {
				'col s-4 s-offset-4 tower-col': !completed,
				col: completed,
			})}
		>
			{completed ? (
				<div className="final-block">
					<h1 className="title">{t('game.done.title')}</h1>
					<p className="desc">{t('game.done.description')}</p>
					<Button
						onClick={() => {
							historyPush('/');
							// changeData({});
						}}
						title={t('game.done.btn')}
					/>
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
