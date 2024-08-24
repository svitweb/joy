import '../styles/style.scss';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as cardModalActions from '../Actions';
import Button from '../../../button/Button';
import Modal from '../../../modal/Modal';
import { getLocalStorageItem } from '../../../../services/Helper';
import * as gameActions from '../../../../client/gamePage/Actions';

const LabyrinthQuestionModal = ({
	open,
	cardData,
	type,
	toggleCardModal,
	changeData,
	gameData,
}) => {
	const { t } = useTranslation();

	const { id, img, desc, selected } = cardData || {};

	const [flipped, setFlipped] = useState(false);

	useEffect(() => {
		setTimeout(
			() => {
				setFlipped(!!open);
			},
			open ? 1500 : 400,
		);
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
		<Modal isOpen={open} className={classNames('card-modal', type, { flipped, selected })}>
			<div className={classNames('card', { flipped })}>
				<div className="card-inner">
					<div className="card-front">
						<img src={img} alt="illustration" />
					</div>
					<div className="card-back">
						<p className="desc">{desc}</p>
						<Button title={'✔'} onClick={handleOnClose} />
					</div>
				</div>
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
