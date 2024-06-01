import React from 'react';
import FormInput from './input/FormInput';
import PhoneField from './input/PhoneField';

export const renderFormInput = ({
	input: { onChange, value, onBlur },
	label,
	meta: { error, dirty, touched },
	type,
	noBlur,
	floatingLabel,
	focusOnMount,
}) => (
	<div className="form-group">
		<FormInput
			floatingLabel={floatingLabel}
			error={touched && error}
			label={label}
			onBlur={!noBlur && onBlur}
			onChange={onChange}
			type={type}
			value={value}
			focusOnMount={focusOnMount}
		/>
	</div>
);

export const renderPhoneInput = ({
	input: { onChange, value, onBlur },
	label,
	meta: { error, dirty, touched },
	type,
	noBlur,
	floatingLabel,
	focusOnMount,
}) => (
	<div className="form-group">
		<PhoneField
			onChange={onChange}
			value={value}
			error={touched && error}
			label={label}
			onBlur={!noBlur && onBlur}
			type={type}
			focusOnMount={focusOnMount}
			floatingLabel={floatingLabel}
		/>
	</div>
);
