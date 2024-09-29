import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as towerModalActions from '../Actions';
import * as gameActions from '../../../../client/gamePage/Actions';
import Button from '../../../button/Button';
import Modal from '../../../modal/Modal';
import * as audioVisualizationActions from '../../../audioVisualization/Actions';
import { audioVisualizationTypes } from '../../../audioVisualization/Constants';

const TowerModal = ({
	open,
	toggleTowerModal,
	changeData,
	setAudioVisualization,
	gameData = {},
}) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, completed } = tower || {};

	const [response, setResponse] = useState(null);
	const [reject, setReject] = useState(false);

	useEffect(() => {
		if (open && active) {
			setResponse(completed ? completed : Math.floor(Math.random() * 30));
		}
	}, [open]);

	const handleOnClose = (isRejected) => {
		if (isRejected) setReject(true);

		if (!active) setAudioVisualization({ audioFileName: audioVisualizationTypes.TOWER_ACTIVE });

		toggleTowerModal({ open: false });
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('tower-modal', {
				active,
			})}
			clearState={() => {
				if (!reject)
					changeData({
						...gameData,
						tower: { active: !active || true, completed: active ? response : false },
					});
				setReject(false);
			}}
		>
			<div className="bg" />
			<p className="desc">
				{!active ? t('tower.ready_question') : t(`tower.response.${response}`)}
			</p>
			<div className="btn-group center">
				{!active && (
					<Button
						className="action-btn"
						type="icon"
						iconName="icon-no"
						onClick={() => handleOnClose(true)}
					/>
				)}
				<Button
					className="action-btn"
					type="icon"
					iconName="icon-yes"
					onClick={() => handleOnClose(false)}
				/>
			</div>
		</Modal>
	);
};

const mapStateToProps = ({ towerModalReducer, gamePageReducer }) => ({
	open: towerModalReducer.open,
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleTowerModal: towerModalActions.toggleTowerModal,
	clearState: towerModalActions.clearState,
	changeData: gameActions.changeData,
	setAudioVisualization: audioVisualizationActions.setAudioVisualization,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(TowerModal));
