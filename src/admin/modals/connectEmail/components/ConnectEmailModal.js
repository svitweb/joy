import React, { useState, useEffect, useMemo, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as connectEmailActions from '../Actions';
import Button from '../../../../components/button/Button';
import FormInput from '../../../../components/input/FormInput';

const ConnectEmailModal = ({
	open,
	toggleConnectEmailModal,
	connectEmail,
	submitLoading,
	clearState,
	gameId,
	codeId,
}) => {
	const [email, setEmail] = useState('');

	const valid = useMemo(() => email?.trim(), [email]);

	useEffect(() => {
		if (!open) {
			setEmail('');
			clearState();
		}
	}, [open]);

	const onClose = () => {
		toggleConnectEmailModal({ open: false });
	};

	const submit = () => {
		connectEmail({
			email,
			gameId,
			codeId,
		});
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
							<span className="text">{'Connect email'}</span>
						</h3>
						<FormInput
							floatingLabel
							label="Email"
							onChange={setEmail}
							type="email"
							value={email}
						/>
						<div className="btn-group submit-btn-group right">
							<Button
								onClick={submit}
								disabled={!valid}
								loading={submitLoading}
								title={'Connect'}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

const mapStateToProps = ({ connectEmailReducer }) => ({
	open: connectEmailReducer.open,
	submitLoading: connectEmailReducer.submitLoading,
	gameId: connectEmailReducer.gameId,
	codeId: connectEmailReducer.codeId,
});

const mapDispatchToProps = {
	toggleConnectEmailModal: connectEmailActions.toggleConnectEmailModal,
	connectEmail: connectEmailActions.connectEmail,
	clearState: connectEmailActions.clearState,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(ConnectEmailModal);
