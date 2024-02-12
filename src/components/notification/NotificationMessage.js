/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/Button';
import { Timer } from '../../services/Helper';

class NotificationMessage extends PureComponent {
	componentDidMount() {
		const { timeout } = this.props;
		if (timeout) this.autoHideTimeout = new Timer(this.closeMessage, timeout);
	}

	componentWillUnmount() {
		const { timeout } = this.props;
		if (timeout) clearTimeout(this.autoHideTimeout);
	}

	closeMessage = () => this.props.closeNotification();

	pauseTimer = () => this.props.timeout && this.autoHideTimeout.pause();

	resumeTimer = () => this.props.timeout && this.autoHideTimeout.resume();

	render() {
		const { closeNotification, subtitle, title, type, error } = this.props;
		return (
			<>
				<div
					onMouseEnter={this.pauseTimer}
					onMouseLeave={this.resumeTimer}
					className={classNames('notification', { error: error })}
				>
					<span
						className={classNames('icon', {
							'icon-error': error,
							'icon-success': !error,
						})}
					/>
					<div className="notification-info">
						<span className="main-text">{title}</span>
						{subtitle && <span className="sub-text">{subtitle}</span>}
					</div>
					<Button iconName="icon-close" onClick={closeNotification} type="icon-link" />
				</div>
			</>
		);
	}
}

NotificationMessage.defaultProps = {
	type: 'primary',
};

NotificationMessage.propTypes = {
	closeNotification: PropTypes.func.isRequired,
	subtitle: PropTypes.string,
	timeout: PropTypes.number,
	title: PropTypes.string,
	type: PropTypes.string,
};

export default NotificationMessage;
