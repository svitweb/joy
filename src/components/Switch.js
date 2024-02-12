import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from "./Label";

const Switch = ({
					title,
					checked,
					disabled,
					label,
					name,
					onChange,
					value
				}) => {

	const handleClick = (e) => onChange(e.target.checked, value);

	return (
		<label className={classNames('switch', {'disabled': disabled})}>
			{title && <span className="switch-title">{title}</span>}
			{disabled && label && <Label title={label}/>}
			<div className='switch-input'>
				<input
					checked={checked}
					name={name}
					onClick={handleClick}
					type="checkbox"
					value={value}
				/>
				<span className="backdrop"/>
				<span className="visual"/>
			</div>
		</label>
	);
};

Switch.defaultProps = {
	checked: false,
	disabled: false,
	label: 'Upgrade',
	name: 'switch',
	value: 'switch',
	onChange: () => {
	},
};

Switch.propTypes = {
	checked: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func,
};

export default Switch;
