import './radio_checkbox.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioCheckbox = ({
	checked,
	className,
	disabled,
	name,
	value,
	onChange,
	rounded,
	type,
	text,
	label,
	labelActive,
	propagationStop,
	partlyChecked,
}) => {
	const handleClick = (e) => {
		if (disabled) return;
		if (propagationStop) e.stopPropagation();
		const inputChecked = e.target.checked;
		onChange(inputChecked, name, value);
	};

	return (
		<label
			className={classNames(`wrts-${type}`, className, {
				disabled,
				rounded,
				'partly-checked': partlyChecked,
			})}
			onClick={propagationStop ? (e) => e.stopPropagation() : undefined}
		>
			<input
				checked={checked}
				disabled={disabled}
				name={name}
				value={value}
				onChange={handleClick}
				type={type}
			/>
			<span className="visual" />
			{text.length && <span className="text">{text}</span>}
			{label && <span className={classNames('label', { active: labelActive })}>{label}</span>}
		</label>
	);
};

RadioCheckbox.defaultProps = {
	checked: false,
	disabled: false,
	name: 'checkbox',
	onChange: () => {},
	rounded: false,
	type: 'checkbox',
	text: '',
	propagationStop: false,
	partlyChecked: false,
};

RadioCheckbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	type: PropTypes.oneOf(['checkbox', 'radio']),
	onChange: PropTypes.func,
	text: PropTypes.string,
	label: PropTypes.string,
	labelActive: PropTypes.bool,
	propagationStop: PropTypes.bool,
	partlyChecked: PropTypes.bool,
	defaultTheme: PropTypes.string,
};

export default memo(RadioCheckbox);
