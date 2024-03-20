import classNames from 'classnames';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './label.scss';

const Label = ({ title, className, color }) => {
	return <span className={classNames('label-wrapper', className, color)}>{title}</span>;
};

Label.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.oneOf(['grey', 'orange', 'red', 'green', 'yellow', 'blue', 'white']),
};

export default memo(Label);
