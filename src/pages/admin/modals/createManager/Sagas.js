import { processRequest } from '../../../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createManagerModalActionTypes } from './Constants';
import * as createManagerActions from './Actions';
import * as notificationActions from '../../../../components/notification/NotificationActions';
import * as adminActions from '../../Actions';

export default function* () {
	yield all([
		yield takeLatest(createManagerModalActionTypes.CREATE_MANAGER, handleCreateManager),
	]);
}

export function* handleCreateManager({ payload }) {
	try {
		const { data } = yield call(processRequest, '/admin/create', 'POST', payload);
		yield put(createManagerActions.createManagerSuccess(data));
		yield put(adminActions.addManagerToList(data));
	} catch (e) {
		yield put(createManagerActions.createManagerError(e));
		yield put(notificationActions.createNotification('ERROR'));
	}
}
