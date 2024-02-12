import './styles/switchItem.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SwitchItem = ({ checked, label }) => (
	<label className="wrts-toggle-field">
		<span className="toggle-label">{label}</span>
		<div className="toggle">
			<input type="checkbox" checked={checked} />
			<span className="backdrop" />
			<span className="visual" />
		</div>
	</label>
);

SwitchItem.propTypes = {
	checked: PropTypes.bool,
	label: PropTypes.string,
};

export default memo(SwitchItem);
