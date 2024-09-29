import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as cardModalActions from '../Actions';
import * as gameActions from '../../../../client/gamePage/Actions';
import Modal from '../../../modal/Modal';

const LabyrinthQuestionModal = ({
	open,
	cardData,
	type,
	toggleCardModal,
	changeData,
	gameData,
}) => {
	const { img, selected } = cardData || {};
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		if (open) setTimeout(() => setOpened(true), 300);
	}, [open]);

	const handleOnClose = () => {
		if (!selected) {
			const selectedCards = gameData.selectedCards || [];
			selectedCards.push({ ...cardData, type, selected: true });
			changeData({ ...gameData, selectedCards });
		}

		toggleCardModal({ open: false });
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('card-modal', type, { opened, selected })}
			clearState={() => {
				setOpened(false);
			}}
		>
			<div className={classNames('card')} onClick={handleOnClose}>
				<img src={img} alt="illustration" width={360} height={512} />
			</div>
		</Modal>
	);
};

const mapStateToProps = ({ cardModalReducer, gamePageReducer }) => ({
	open: cardModalReducer.open,
	type: cardModalReducer.type,
	cardData: cardModalReducer.cardData,
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleCardModal: cardModalActions.toggleCardModal,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(LabyrinthQuestionModal));
