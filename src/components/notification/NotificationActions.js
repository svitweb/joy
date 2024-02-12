import { notificationActionTypes } from './NotificationConstants';

export function createNotification(title, subtitle, error, timeout) {
	return {
		type: notificationActionTypes.CREATE_NOTIFICATION_MESSAGE,
		payload: {
			title,
			subtitle,
			error,
			timeout,
		},
	};
}

export function closeNotification(id) {
	return {
		type: notificationActionTypes.NOTIFICATION_MESSAGE_CLOSE,
		payload: {
			id,
		},
	};
}
