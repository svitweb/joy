import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as towerModalActions from '../Actions';
import * as gameActions from '../../../../client/gamePage/Actions';
import Button from '../../../button/Button';
import Modal from '../../../modal/Modal';

const TowerModal = ({ open, toggleTowerModal, changeData, gameData = {} }) => {
	const { t } = useTranslation();

	const { tower } = gameData || {};
	const { active, completed } = tower || {};

	const [response, setResponse] = useState(null);

	useEffect(() => {
		if (open && active) {
			setResponse(completed ? completed : Math.floor(Math.random() * 30));
		}
	}, [open]);

	const handleOnClose = () => {
		toggleTowerModal({ open: false });
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('tower-modal', {
				active,
			})}
			clearState={() => {
				changeData({
					...gameData,
					tower: { active: !active || true, completed: active ? response : false },
				});
			}}
		>
			<p className="desc">
				{!active ? t('tower.ready_question') : t(`tower.response.${response}`)}
			</p>
			<Button title={active ? '✔' : 'Yes'} onClick={handleOnClose} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(TowerModal));
