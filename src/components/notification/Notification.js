import React from 'react';
import PropTypes from 'prop-types';
import NotificationMessage from './NotificationMessage';
import * as notificationActions from './NotificationActions';
import { connect } from 'react-redux';

const Notification = ({ notifications, closeNotification }) => (
	<>
		{!!notifications.length && (
			<div className="notification-wrapper">
				{notifications.map((item) => (
					<NotificationMessage
						title={item.title}
						subtitle={item.subtitle}
						key={item.id}
						closeNotification={() => closeNotification(item.id)}
						type={item.type}
						timeout={item.timeout}
						error={item.error}
					/>
				))}
			</div>
		)}
	</>
);

Notification.propTypes = {
	closeNotification: PropTypes.func.isRequired,
	notifications: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
	return {
		notifications: state.notificationReducer.notifications,
	};
}

const mapDispatchToProps = {
	closeNotification: notificationActions.closeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
