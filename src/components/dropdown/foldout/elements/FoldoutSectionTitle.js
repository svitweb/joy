import React, { memo } from 'react';
import PropTypes from 'prop-types';

const FoldoutSectionTitle = ({ children }) => <div className="section-title">{children}</div>;

FoldoutSectionTitle.propTypes = {
	children: PropTypes.node,
};

export default memo(FoldoutSectionTitle);
