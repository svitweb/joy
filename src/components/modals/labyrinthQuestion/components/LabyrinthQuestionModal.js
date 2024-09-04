import '../styles/style.scss';
import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as labyrinthQuestionModalActions from '../Actions';
import * as gameActions from '../../../../client/gamePage/Actions';
import Button from '../../../button/Button';
import Modal from '../../../modal/Modal';

const LabyrinthQuestionModal = ({
	open,
	data,
	type,
	toggleLabyrinthQuestionModal,
	changeData,
	gameData = {},
	clearState,
	objType,
}) => {
	const { t } = useTranslation();

	const { desc, selected } = data || {};

	const tree = gameData[`${type}Lab`]?.tree || [];

	const [step, setStep] = useState(1);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!objType)
			setTimeout(() => {
				setVisible(!!open);
			}, 200);
	}, [open]);

	const handleOnClose = () => {
		if (objType === 'top') {
			toggleLabyrinthQuestionModal({ open: false });
			return;
		}

		if (objType === 'main') {
			if (step === 1) {
				setStep(2);
				return;
			}

			toggleLabyrinthQuestionModal({ open: false });
			return;
		}

		if (!selected) {
			const selectedCards = gameData.selectedCards || [];
			selectedCards.push({ ...data, type, selected: true });
			changeData({ ...gameData, selectedCards });
		}

		toggleLabyrinthQuestionModal({ open: false });
	};

	return (
		<Modal
			isOpen={open}
			className={classNames('labyrinth-question-modal', type, {
				selected,
				visible,
				objType,
			})}
			clearState={() => {
				if (objType === 'top') {
					const updatedTree = [...tree];

					if (updatedTree.length < 2) {
						updatedTree.push(updatedTree.length + 1);
					} else {
						if (updatedTree[updatedTree.length - 1] === 2) {
							updatedTree[updatedTree.length - 1] = 1;
						} else if (updatedTree[updatedTree.length - 1] === 1) {
							updatedTree[updatedTree.length - 1] = 2;
						}
					}
					changeData({
						...gameData,
						[`${type}Lab`]: { ...gameData[`${type}Lab`], tree: updatedTree },
					});
				}
				setStep(1);
				clearState();
			}}
		>
			<div className={classNames('bg', type, objType)} />
			{objType === 'top' && (
				<p className="desc">
					{t(
						`tree.${type}.${
							!tree.length ? 1 : tree.length === 1 ? 2 : tree[tree.length - 1]
						}`,
					)}
				</p>
			)}
			{objType === 'main' && (
				<p className="desc">
					{step === 1 ? t('object.ready_question') : t(`object.${type}_question`)}
				</p>
			)}
			{!!desc && <p className="desc">{desc}</p>}
			<Button title={desc ? '✔' : 'Yes'} onClick={handleOnClose} />
		</Modal>
	);
};

const mapStateToProps = ({ labyrinthQuestionModalReducer, gamePageReducer }) => ({
	open: labyrinthQuestionModalReducer.open,
	type: labyrinthQuestionModalReducer.type,
	data: labyrinthQuestionModalReducer.data,
	objType: labyrinthQuestionModalReducer.objType,
	gameData: gamePageReducer.gameData,
});

const mapDispatchToProps = {
	toggleLabyrinthQuestionModal: labyrinthQuestionModalActions.toggleLabyrinthQuestionModal,
	clearState: labyrinthQuestionModalActions.clearState,
	changeData: gameActions.changeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(LabyrinthQuestionModal));
