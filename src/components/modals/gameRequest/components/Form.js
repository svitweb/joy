import React, { memo, useEffect, useMemo, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Field, isDirty, reduxForm, isValid } from 'redux-form';
import * as gameRequestActions from '../Actions';
import { gameRequestFormValidate } from '../../../../services/FormValidate';
import { renderFormInput, renderPhoneInput } from '../../../FormFields';
import Button from '../../../button/Button';
import RadioButton from '../../../RadioButton';

const Form = ({ handleSubmit, gameRequest, valid, type }) => {
	const { t } = useTranslation();

	const [requestPackage, setRequestPackage] = useState(type);
	const [requestPackageError, setRequestPackageError] = useState(false);

	const disabled = useMemo(() => !requestPackage || !valid, [requestPackage, valid]);

	useEffect(() => {
		if (requestPackage) setRequestPackageError(false);
	}, [requestPackage]);

	const submit = (data) => {
		if (disabled) return;
		gameRequest({ ...data, package: requestPackage });
	};

	return (
		<form
			className="form"
			onSubmit={(e) => {
				e.preventDefault();
				setRequestPackageError(!requestPackage);
				handleSubmit(submit)();
			}}
			autoComplete="off"
		>
			<div className="form-group">
				<div className="package-select-list">
					<label className="package-select">
						<div className="package-select-main">
							<h4 className="package-select-title">
								{t('modals.game_request_modal.package_1.title')}
							</h4>
							<RadioButton
								type="checkbox"
								name="package1"
								checked={requestPackage === 'individual'}
								onChange={() => setRequestPackage('individual')}
							/>
						</div>
						<div className="divider" />
						<div className="info-block">
							<span className="info">
								{t('modals.game_request_modal.package_1.info')}
							</span>
							<span className="info">
								{t('modals.game_request_modal.package_1.price')}
							</span>
						</div>
					</label>
					<label className="package-select group">
						<div className="package-select-main">
							<h4 className="package-select-title">
								{t('modals.game_request_modal.package_2.title')}
							</h4>
							<RadioButton
								type="checkbox"
								name="package1"
								checked={requestPackage === 'group'}
								onChange={() => setRequestPackage('group')}
							/>
						</div>
						<div className="divider" />
						<div className="info-block">
							<span className="info">
								{t('modals.game_request_modal.package_2.info')}
							</span>
							<span className="info">
								{t('modals.game_request_modal.package_2.price')}
							</span>
						</div>
					</label>
				</div>
				<span className="error-msg">
					{requestPackageError ? t('forms.package_error') : ''}
				</span>
			</div>
			<Field
				name="name"
				type="text"
				component={renderFormInput}
				label={t('forms.name_field')}
				floatingLabel
			/>
			<Field name="phone" type="tel" component={renderPhoneInput} />
			<Field
				name="email"
				type="email"
				component={renderFormInput}
				label={t('forms.email_field')}
				floatingLabel
			/>
			<div className="btn-group center">
				<Button title={t('general.request_btn')} className="submit-btn" btnType="submit" />
			</div>
		</form>
	);
};

const mapStateToProps = (state) => {
	const { gameRequestReducer } = state || {};

	return {
		dirty: isDirty('gameRequestForm')(state),
		valid: isValid('gameRequestForm')(state),
		submitLoading: gameRequestReducer.submitLoading,
		submitted: gameRequestReducer.submitted,
		type: gameRequestReducer.type,
	};
};

const mapDispatchToProps = {
	gameRequest: gameRequestActions.gameRequest,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({
		form: 'gameRequestForm',
		validate: gameRequestFormValidate,
		enableReinitialize: true,
	}),
	memo,
)(Form);
