import React, { useState } from 'react';
// import { renderFormInput } from '../../../components/FormFields';
// import { createListValidate } from '../../../services/FormValidate.js';
import Button from '../../../components/button/Button';
import { connect } from 'react-redux';
import * as adminActions from '../Actions';
import FormInput from '../../../components/input/FormInput';

const LoginAdminModal = ({ open, toggleAdminLoginModal, loginAdmin }) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const disabled = !name?.trim() && !password?.trim();

	useState(() => {
		if (!open) {
			setName('');
			setPassword('');
		}
	}, [open]);

	const onClose = () => {
		toggleAdminLoginModal({ isOpenLoginModal: false });
	};

	const logIn = () => {
		loginAdmin(name, password);
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
							<span className="text">Login as admin</span>
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
							label="Password"
							onChange={setPassword}
							type="password"
							name="password"
							value={password}
						/>
						<div className="btn-group submit-btn-group right">
							<Button
								onClick={logIn}
								disabled={disabled}
								loading={false}
								title="Log in"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

const mapStateToProps = ({ adminReducer }) => ({
	open: adminReducer.isOpenLoginModal,
});

const mapDispatchToProps = {
	toggleAdminLoginModal: adminActions.toggleAdminLoginModal,
	loginAdmin: adminActions.loginAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginAdminModal);
