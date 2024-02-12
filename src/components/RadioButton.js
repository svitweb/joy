import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioButton = ({
                         checked,
                         className,
                         disabled,
                         name,
                         onChange,
                         rounded,
                         type,
                     }) => {

    const handleClick = (e) => {
        onChange(e.target.checked, name)
    };

    return (
        <label className={
            classNames(type, className, {'disabled': disabled, 'round': rounded})}>
            <input
                checked={checked}
                disabled={disabled}
                name={name}
                onClick={handleClick}
                type={type}
            />
            <span className="visual"/>
        </label>
    );
};

RadioButton.defaultProps = {
    checked: false,
    disabled: false,
    name: 'checkbox',
    onChange:()=>{},
    rounded: false,
    type: 'checkbox',
};

RadioButton.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio']),
    onChange: PropTypes.func,
};

export default RadioButton;
