import React, { useState, memo, useEffect } from 'react';
// import { renderFormInput } from '../../../components/FormFields';
// import { createListValidate } from '../../../services/FormValidate.js';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as signInActions from '../Actions';
import Button from '../../../../components/button/Button';
import FormInput from '../../../../components/input/FormInput';

const SignInModal = ({ open, toggleSignInModal, signIn, loading }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const valid = email?.trim() && password?.trim();

	useEffect(() => {
		if (!open) {
			setEmail('');
			setPassword('');
		}
	}, [open]);

	const onClose = () => {
		toggleSignInModal({ open: false });
	};

	const logIn = () => {
		signIn(email, password);
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
								onClick={logIn}
								disabled={!valid}
								loading={loading}
								title="Log in"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

const mapStateToProps = ({ signInReducer }) => ({
	open: signInReducer.open,
	loading: signInReducer.loading,
});

const mapDispatchToProps = {
	toggleSignInModal: signInActions.toggleSignInModal,
	signIn: signInActions.signIn,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(SignInModal);
