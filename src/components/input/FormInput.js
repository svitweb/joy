import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormInput = ({
	classname,
	color,
	error,
	floatingLabel,
	label,
	onBlur,
	onChange,
	type,
	value,
}) => {
	const [showValue, setShowValueStatus] = useState(false);

	const handleChange = (e) => onChange(e.target.value);
	const showHideValue = () => setShowValueStatus(!showValue);

	return (
		<div className={classNames('form-field', classname)}>
			<div
				className={classNames('input-field', {
					'hide-placeholder': floatingLabel,
					'hide-label': !floatingLabel,
				})}
			>
				<input
					placeholder={floatingLabel ? '*' : label}
					className={classNames({
						error: error,
						'light-gray': color === 'gray',
						'hide-label': !floatingLabel,
					})}
					onBlur={onBlur}
					onChange={handleChange}
					type={showValue && type === 'password' ? 'text' : type}
					value={value}
				/>
				{floatingLabel && <label>{label}</label>}
				{type === 'password' && value && (
					<button type="button" className="icon-link field-btn" onClick={showHideValue}>
						<span
							className={classNames(
								'icon',
								`icon-visibility${!showValue ? '-off' : ''}`,
							)}
						/>
					</button>
				)}
			</div>
			<span className="error-msg">{error}</span>
		</div>
	);
};

FormInput.defaultProps = {
	type: 'text',
	onBlur: () => {},
	onChange: () => {},
	floatingLabel: false,
};

FormInput.propTypes = {
	color: PropTypes.oneOf(['light-gray']),
	error: PropTypes.string,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['text', 'password']),
	value: PropTypes.string,
};

export default FormInput;
