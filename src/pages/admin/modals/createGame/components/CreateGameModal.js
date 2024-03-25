import React, { useState, useEffect, useMemo, memo } from 'react';
// import { renderFormInput } from '../../../components/FormFields';
// import { createListValidate } from '../../../services/FormValidate.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as createGameActions from '../Actions';
import Button from '../../../../../components/button/Button';
import FormInput from '../../../../../components/input/FormInput';

const CreateGameModal = ({ open, toggleCreateGameModal, createGame, submitLoading }) => {
	const [name, setName] = useState('');
	const [codesCount, setCodesCount] = useState(null);

	const valid = useMemo(() => name?.trim(), [name]);

	useEffect(() => {
		if (!open) {
			setName('');
			setCodesCount(null);
		}
	}, [open]);

	const onClose = () => {
		toggleCreateGameModal({ open: false });
	};

	const handleCreate = () => {
		createGame(name, codesCount);
	};

	return (
		open && (
			<div className="popup add-edit-popup">
				<div className="popup-backdrop" />
				<div className="popup-wrap">
					<Button className="btn-close" iconName="icon-close" onClick={onClose} />
					<div className="auth-page-form">
						<h3 className="popup-title">
							{/* <span className="icon icon-add" /> */}
							<span className="text">Create game</span>
						</h3>
						<FormInput
							floatingLabel
							label="Name"
							onChange={setName}
							type="text"
							value={name}
						/>
						<FormInput
							floatingLabel
							label="Codes count"
							onChange={setCodesCount}
							type="number"
							value={codesCount}
						/>
						<div className="btn-group submit-btn-group right">
							<Button
								onClick={handleCreate}
								disabled={!valid}
								loading={submitLoading}
								title="Create"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

const mapStateToProps = ({ createGameReducer }) => ({
	open: createGameReducer.open,
	submitLoading: createGameReducer.submitLoading,
});

const mapDispatchToProps = {
	toggleCreateGameModal: createGameActions.toggleCreateGameModal,
	createGame: createGameActions.createGame,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(CreateGameModal);
