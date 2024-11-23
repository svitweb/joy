import '../styles/style.scss';
import React, { memo } from 'react';
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
	completedType,
	clearState,
}) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, homework, toResponse, response, completed } = tower || {};

	const handleOnClose = (isRejected) => {
		// if (!active) setAudioVisualization({ audioFileName: audioVisualizationTypes.TOWER_ACTIVE });

		toggleTowerModal({ open: false });

		if (!active) {
			if (isRejected) return;

			setTimeout(() => {
				changeData({
					...gameData,
					tower: {
						active: true,
					},
				});
			}, 200);

			setTimeout(() => {
				toggleTowerModal({ open: true });
			}, 400);
		}

		if (active && !homework) {
			setTimeout(() => {
				changeData({
					...gameData,
					tower: {
						...tower,
						homework: isRejected ? 'rejected' : Math.floor(Math.random() * 36),
						toResponse: isRejected,
					},
				});
			}, 200);

			setTimeout(() => {
				toggleTowerModal({ open: true });
			}, 400);
		}

		if (homework && !toResponse) {
			setTimeout(() => {
				const selectedCards = gameData.selectedCards || [];

				selectedCards.push({
					id: 'homework-card',
					type: 'homework',
					desc: t(`tower.homework.${homework}`),
				});

				changeData({
					...gameData,
					tower: {
						...tower,
						toResponse: true,
					},
					selectedCards,
				});
			}, 200);

			setTimeout(() => {
				toggleTowerModal({ open: true });
			}, 400);
		}

		if (toResponse && !response) {
			setTimeout(() => {
				changeData({
					...gameData,
					tower: {
						...tower,
						response: isRejected ? 'rejected' : Math.floor(Math.random() * 40),
						completed: isRejected,
					},
				});
			}, 200);

			if (!isRejected)
				setTimeout(() => {
					toggleTowerModal({ open: true });
				}, 400);
		}

		if (response && !completed) {
			setTimeout(() => {
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
			}, 200);
		}
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('tower-modal', {
				response: completedType === 'response' || (!!response && !completed),
				completed: completed,
			})}
			clearState={clearState}
		>
			<div
				className="bg"
				onClick={completed ? () => toggleTowerModal({ open: false }) : undefined}
			/>
			{!completed ? (
				<p className="desc">
					{!active && !homework && t('tower.ready')}
					{!!active && !homework && t('tower.ready_homework')}
					{!!homework && !toResponse && t(`tower.homework.${homework}`)}
					{toResponse && !response && t(`tower.ready_response`)}
					{!!response && t(`tower.response.${response}`)}
				</p>
			) : (
				<p className="desc">
					{completedType === 'homework' && t(`tower.homework.${homework}`)}
					{completedType === 'response' && t(`tower.response.${response}`)}
				</p>
			)}
			{!completed && (
				<div className="btn-group center">
					{!active || (!!active && !homework) || (toResponse && !response) ? (
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
							className="action-btn"
							type="icon"
							iconName="icon-yes"
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
	completedType: towerModalReducer.completedType,
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleTowerModal: towerModalActions.toggleTowerModal,
	clearState: towerModalActions.clearState,
	changeData: gameActions.changeData,
	setAudioVisualization: audioVisualizationActions.setAudioVisualization,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(TowerModal));
