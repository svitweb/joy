import { processRequest } from '../../services/Api';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { mainPageActionTypes } from './Constants';
import * as mainPageActions from './Actions';
import * as notificationActions from '../../components/notification/NotificationActions';

export default function* () {
	yield all([yield takeLatest(mainPageActionTypes.CONTACT_REQUEST, handleContactRequest)]);
}

export function* handleContactRequest({ payload }) {
	try {
		const { data } = payload || {};

		yield call(processRequest, `requests/contact`, 'POST', data);
		yield put(mainPageActions.contactRequestSuccess());
	} catch (e) {
		yield put(mainPageActions.contactRequestError(e));
		yield put(notificationActions.createNotification('Error', null, false, 5000));
	}
}
