import '../styles/contact_form_section.scss';
import React, { memo, useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Field, isDirty, isValid, reduxForm, reset } from 'redux-form';
import * as mainPageActions from '../Actions';
import { contactRequestFormValidate } from '../../../services/FormValidate';
import { renderFormInput, renderPhoneInput } from '../../../components/FormFields';
import Button from '../../../components/button/Button';
import { useLanguage } from '../../../services/LanguageContext';
import Cookies from 'js-cookie';

const ContactForm = ({
	contactRequest,
	contactRequestSubmitLoading,
	handleSubmit,
	valid,
	clearContactRequestForm,
	setSubmittedState,
}) => {
	const { t } = useTranslation();

	const { language } = useLanguage();

	const [messenger, setMessenger] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(reset('contactRequestForm'));
	}, [language]);

	const contactRequestDone = Cookies.get('contactRequest');

	const submit = (data) => {
		if (!valid) return;

		if (contactRequestDone) {
			setSubmittedState(true);
			return;
		}
		contactRequest({ ...data, messenger });
	};

	useEffect(() => {
		return () => {
			clearContactRequestForm();
		};
	}, []);

	return (
		<form onSubmit={handleSubmit(submit)} autoComplete="off">
			<div className="row">
				<div className="col s-6">
					<Field
						name="name"
						type="text"
						component={renderFormInput}
						label={t('forms.name_field')}
						floatingLabel
					/>
				</div>
				<div className="col s-6">
					<Field name="phone" type="tel" component={renderPhoneInput} />
				</div>
				<div className="col s-6">
					<div className="btn-group">
						<Button
							className="white-border full-width"
							iconName="icon-whatsapp"
							active={messenger === 'whatsapp'}
							onClick={
								messenger === 'whatsapp'
									? undefined
									: () => setMessenger('whatsapp')
							}
						/>
						<Button
							className="white-border full-width"
							iconName="icon-telegram"
							active={messenger === 'telegram'}
							onClick={
								messenger === 'telegram'
									? undefined
									: () => setMessenger('telegram')
							}
						/>
						<Button
							className="white-border full-width"
							iconName="icon-viber"
							active={messenger === 'viber'}
							onClick={
								messenger === 'viber' ? undefined : () => setMessenger('viber')
							}
						/>
					</div>
				</div>
				<div className="col s-6">
					<Button
						title={t('general.send')}
						className="full-width submit-btn blue"
						loading={contactRequestSubmitLoading}
						btnType="submit"
					/>
				</div>
			</div>
		</form>
	);
};

const mapStateToProps = (state) => {
	const { mainPageReducer } = state || {};

	return {
		dirty: isDirty('contactRequestForm')(state),
		valid: isValid('contactRequestForm')(state),
		contactRequestSubmitLoading: mainPageReducer.contactRequestSubmitLoading,
	};
};

const mapDispatchToProps = {
	contactRequest: mainPageActions.contactRequest,
	setSubmittedState: mainPageActions.setSubmittedState,
	clearContactRequestForm: mainPageActions.clearContactRequestForm,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({
		form: 'contactRequestForm',
		validate: contactRequestFormValidate,
		enableReinitialize: true,
	}),
	memo,
)(ContactForm);
