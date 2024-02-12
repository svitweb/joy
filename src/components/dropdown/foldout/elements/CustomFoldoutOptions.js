import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CustomFoldoutOptions = ({ children }) => <div className="section nested">{children}</div>;

CustomFoldoutOptions.propTypes = {
	children: PropTypes.node,
};

export default memo(CustomFoldoutOptions);
