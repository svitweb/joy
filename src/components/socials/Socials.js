import './style.scss';
import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';

const Socials = ({ className }) => {
	return (
		<div className={classNames('socials', className)}>
			<Button type="icon" iconName="icon-instagram" />
			<Button type="icon" iconName="icon-facebook" />
			<Button type="icon" iconName="icon-whatsapp" />
			<Button type="icon" iconName="icon-telegram" />
		</div>
	);
};

Socials.propTypes = {
	className: PropTypes.string,
};

export default memo(Socials);
