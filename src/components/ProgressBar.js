import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({value }) => (
		<div className="progress-bar-wrapper">
			<div className="progress-bar">
				<span className="progress" style={{width: value + '%'}}/>
			</div>
		</div>
	);

ProgressBar.propTypes = {
	value: PropTypes.number,
};

export default ProgressBar;
