import { processRequest } from '../../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { connectEmailModalActionTypes } from './Constants';
import * as connectEmailActions from './Actions';
import * as notificationActions from '../../../components/notification/NotificationActions';

export default function* () {
	yield all([takeLatest(connectEmailModalActionTypes.CONNECT_EMAIL, handleConnectEmail)]);
}

export function* handleConnectEmail({ payload }) {
	try {
		const { data: formData } = payload || {};
		const { gameId } = formData || {};

		const { data } = yield call(
			processRequest,
			`/admin/games/${gameId}/codes`,
			'POST',
			formData,
		);
		yield put(connectEmailActions.connectEmailSuccess(data));
	} catch (e) {
		yield put(notificationActions.createNotification(e));
		yield put(connectEmailActions.connectEmailError(e));
	}
}
