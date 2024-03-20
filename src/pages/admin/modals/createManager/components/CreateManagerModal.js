import React, { useState, useEffect, memo } from 'react';
// import { renderFormInput } from '../../../components/FormFields';
// import { createListValidate } from '../../../services/FormValidate.js';
import Button from '../../../../../components/button/Button';
import { connect } from 'react-redux';
import * as createManagerActions from '../Actions';
import FormInput from '../../../../../components/input/FormInput';
import { compose } from 'redux';
import { createManager, toggleCreateManagerModal } from '../Actions';
import createManagerReducer from '../Reducer';

const CreateManageModal = ({ open, toggleCreateManagerModal, createManager, submitLoading }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const valid = name?.trim() && password?.trim() && email?.trim();

	useEffect(() => {
		if (!open) {
			setName('');
			setEmail('');
			setPassword('');
		}
	}, [open]);

	const onClose = () => {
		toggleCreateManagerModal({ open: false });
	};

	const handleCreate = () => {
		createManager(name, email, password);
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
							<span className="text">Create manager</span>
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
							label="Email"
							onChange={setEmail}
							type="text"
							value={email}
						/>
						<FormInput
							floatingLabel
							label="Password"
							onChange={setPassword}
							type="password"
							name="password"
							value={password}
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

const mapStateToProps = ({ createManagerReducer }) => ({
	open: createManagerReducer.open,
	submitLoading: createManagerReducer.submitLoading,
});

const mapDispatchToProps = {
	toggleCreateManagerModal: createManagerActions.toggleCreateManagerModal,
	createManager: createManagerActions.createManager,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(CreateManageModal);
