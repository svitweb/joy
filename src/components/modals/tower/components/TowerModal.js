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
	const { active, response, completed } = tower || {};

	const [isResponse, setIsResponse] = useState(false);
	const [reject, setReject] = useState(false);

	useEffect(() => {
		if (!open && !!response) {
			setIsResponse(true);
		}
	}, [open]);

	const handleOnClose = (isRejected) => {
		if (isRejected) setReject(true);

		if (!active) setAudioVisualization({ audioFileName: audioVisualizationTypes.TOWER_ACTIVE });

		toggleTowerModal({ open: false });

		if (!active || completed) return;

		if (isRejected) {
			setTimeout(() => {
				changeData({
					...gameData,
					tower: {
						...tower,
						completed: true,
					},
				});
			}, 200);
			return;
		}

		if (!response) {
			setTimeout(() => {
				changeData({
					...gameData,
					tower: {
						...tower,
						response: Math.floor(Math.random() * 30),
					},
				});
			}, 200);

			setTimeout(() => {
				toggleTowerModal({ open: true });
			}, 400);
			return;
		}

		if (!completed) {
			const selectedCards = gameData.selectedCards || [];
			selectedCards.push({
				id: 'response-card',
				type: 'response',
				desc: t(`tower.response.${response}`),
			});

			changeData({
				...gameData,
				tower: {
					...tower,
					completed: true,
				},
				selectedCards,
			});
		}
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('tower-modal', {
				response: !!response,
				completed: isResponse || completed,
			})}
			clearState={() => {
				if (!reject && !active)
					changeData({
						...gameData,
						tower: {
							active: true,
						},
					});

				setReject(false);
				setIsResponse(false);
			}}
		>
			<div
				className="bg"
				onClick={completed ? () => toggleTowerModal({ open: false }) : undefined}
			/>
			<p className="desc">
				{!active && t('tower.ready_question')}
				{!!active && !response && t('Ready for Game response?')}
				{!!active && !!response && t(`tower.response.${response}`)}
			</p>
			{!completed && (
				<div className="btn-group center">
					{!response ? (
						<>
							<Button
								className="action-btn"
								type="icon"
								iconName="icon-no"
								onClick={() => handleOnClose(true)}
							/>
							<Button
								className="action-btn"
								type="icon"
								iconName="icon-yes"
								onClick={() => handleOnClose(false)}
							/>
						</>
					) : (
						<Button
							// className="action-btn"
							// type="icon"
							// iconName="icon-yes"
							title="Accept"
							onClick={() => handleOnClose(false)}
						/>
					)}
				</div>
			)}
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
