import './style.scss';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';
import { NavLink } from 'react-router-dom';

const Button = ({
	activeDropDownItem,
	color,
	children,
	className,
	disabled,
	href,
	iconClassName,
	iconName,
	link,
	loading,
	onClick,
	small,
	title,
	type,
	active,
}) => {
	const _className = classNames(
		'btn',
		!!type && `btn-${type}`,
		{
			disabled: disabled,
			small: small,
			active: active,
			activeDropDownItem: activeDropDownItem,
		},
		className,
	);

	const Content = () => (
		<div className="visual">
			{iconName && <span className={classNames(iconClassName, iconName)} />}
			{title && <span className="text">{title}</span>}
			{loading && <Spinner />}
			{activeDropDownItem && (
				<span className={classNames('icon', 'icon-check', 'dropdown-check')} />
			)}
			{children}
		</div>
	);

	return (
		<>
			{href && (
				<a className={_className} href={href} rel="noopener noreferrer" target="_blank">
					<Content />
				</a>
			)}
			{link && (
				<NavLink
					to={link}
					className={_className}
					onClick={disabled || loading ? undefined : onClick}
					exact
				>
					<Content />
				</NavLink>
			)}
			{!href && !link && (
				<button
					className={_className}
					onClick={disabled || loading ? undefined : onClick}
					type="button"
				>
					<Content />
				</button>
			)}
		</>
	);
};

Button.defaultProps = {
	iconClassName: 'icon',
	type: 'primary',
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	iconName: PropTypes.string,
	link: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	small: PropTypes.bool,
	title: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'link', 'menu', 'icon', '']),
};

export default memo(Button);
