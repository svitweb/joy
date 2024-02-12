import React from 'react';
import FormInput from "./input/FormInput";

export const renderFormInput = ({
									input: {onChange, value, onBlur},
									label,
									meta: {error, dirty, touched},
									type,
									noBlur,
									floatingLabel
								}) => (
	<div className='form-group'>
		<FormInput
			floatingLabel={floatingLabel}
			error={dirty && touched && error}
			label={label}
			onBlur={!noBlur && onBlur}
			onChange={onChange}
			type={type}
			value={value}
		/>
	</div>
);
