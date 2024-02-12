import React, {useEffect, useState, useRef, memo} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const Input = ({
				   focus,
				   onFocus,
				   onChange,
				   placeholder,
				   type,
				   value,
			   }) => {
	const [internalValue, setInternalValue] = useState(value);
	const inputRef = useRef(null);

	useEffect(() => {
		focus && inputRef.current.focus();
	},);

	useEffect(() => {
		setInternalValue(value)
	}, [value]); // keep state and props in sync

	const handleOnchange = (e) => {
		setInternalValue(e.target.value);
		onChange(e.target.value);
	};

	return (
		<input
			ref={inputRef}
			className={classNames(type ? `${type}-input` : null)}
			onFocus={onFocus}
			onChange={handleOnchange}
			placeholder={placeholder}
			type="text"
			value={internalValue}
		/>
	);
};

Input.defaultProps = {
	type: 'default',
	onChange: () => {
	}
};

Input.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['default', 'simple',]),
	value: PropTypes.string,
};

export default memo(Input);
