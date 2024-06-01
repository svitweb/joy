import React from 'react';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PhoneField = ({ floatingLabel, label, error, className, value, onChange }) => {
	const country = navigator.language || navigator.userLanguage;
	const locale = country?.split('-')[1]?.toLowerCase();

	return (
		<div className={classNames('form-field', className)}>
			<div
				className={classNames('input-field', {
					'hide-placeholder': floatingLabel,
					'hide-label': !floatingLabel,
					error,
				})}
			>
				<PhoneInput
					defaultCountry={locale}
					value={value}
					onChange={(phone) => onChange(phone)}
				/>
				{!!label && <label>{label}</label>}
			</div>
			<span className="error-msg">{error}</span>
		</div>
	);
};

PhoneField.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	floatingLabel: true,
};

PhoneField.propTypes = {
	color: PropTypes.oneOf(['light-gray']),
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export default PhoneField;
