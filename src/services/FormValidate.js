import Validator from 'validator';
import i18n from 'i18next';

export const gameRequestFormValidate = (values) => {
	const errors = {};

	if (!values.name?.trim()) errors.name = i18n.t('forms.name_field_error');

	if (!values.email?.trim()) {
		errors.email = i18n.t('forms.email_field_error');
	} else if (!Validator.isEmail(values.email))
		errors.email = i18n.t('forms.email_field_invalid_error');

	if (!values.phone) {
		errors.phone = i18n.t('forms.phone_field_error');
	} else if (!Validator.isMobilePhone(values.phone || '', 'any'))
		errors.phone = i18n.t('forms.phone_field_invalid_error');

	return errors;
};

export const contactRequestFormValidate = (values) => {
	const errors = {};

	if (!values.name?.trim()) errors.name = i18n.t('forms.name_field_error');

	if (!values.phone) {
		errors.phone = i18n.t('forms.phone_field_error');
	} else if (!Validator.isMobilePhone(values.phone || '', 'any'))
		errors.phone = i18n.t('forms.phone_field_invalid_error');

	return errors;
};
