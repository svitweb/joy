import shortid from 'shortid';
import { notificationActionTypes } from './NotificationConstants';

const initialState = {
	notifications: [],
};

export default function notificationReducer(state = initialState, action) {
	const { type, payload } = action;
	const { id, title, subtitle, timeout, error } = payload || {};

	switch (type) {
		case notificationActionTypes.CREATE_NOTIFICATION_MESSAGE:
			const newNotification = {
				id: shortid.generate(),
				title,
				subtitle,
				timeout,
				error,
			};

			return {
				...state,
				notifications: [...state.notifications, newNotification],
			};

		case notificationActionTypes.NOTIFICATION_MESSAGE_CLOSE:
			const filterNotifications = state.notifications.filter((item) => item.id !== id);

			return {
				...state,
				notifications: filterNotifications,
			};

		default:
			return state;
	}
}
