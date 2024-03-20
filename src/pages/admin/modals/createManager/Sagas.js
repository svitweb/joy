import { processRequest } from '../../../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createManagerModalActionTypes } from './Constants';
import * as createManagerActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';
// import { getAdminDataSuccess, loginAdminError, loginAdminSuccess } from './Actions';
import Cookies from 'js-cookie';
import { createManagerError, createManagerSuccess } from './Actions';

export default function* () {
	yield all([
		yield takeLatest(createManagerModalActionTypes.CREATE_MANAGER, handleCreateManager),
	]);
}

export function* handleCreateManager({ payload }) {
	try {
		const { data } = yield call(processRequest, '/admin/create', 'POST', {
			...payload,
			role: 'manager',
		});
		// const { data } = yield call(processRequest, '/playlists/1', 'GET');
		yield put(createManagerActions.createManagerSuccess(data));
	} catch (e) {
		yield put(createManagerActions.createManagerError(e));
	}
}
