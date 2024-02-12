import React, { memo } from 'react';
import spiralImg from './spiral-1-full.svg';
import classNames from 'classnames';

const Spiral = ({ className }) => {
	return (
		<img src={spiralImg} alt="illustration" className={classNames('spiral-img', className)} />
	);
};

export default memo(Spiral);
