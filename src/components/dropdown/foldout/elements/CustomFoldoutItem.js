import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomFoldoutItem = ({ children, classname }) => (
	<div className={classNames('section-item', classname)}>{children}</div>
);

CustomFoldoutItem.propTypes = {
	children: PropTypes.node,
};

export default memo(CustomFoldoutItem);
