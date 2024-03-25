import { processRequest } from '../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { adminActionTypes } from './Constants';
import * as adminActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';
// import { getAdminDataSuccess, loginAdminError, loginAdminSuccess } from './Actions';
import Cookies from 'js-cookie';
import {
	removeGameError,
	removeGameSuccess,
	removeManagerError,
	removeManagerSuccess,
} from './Actions';

export default function* () {
	yield all([
		yield takeLatest(adminActionTypes.GET_OVERVIEW_DATA, handleGetOverviewData),
		yield takeLatest(adminActionTypes.GET_MANAGERS, handleGetManagers),
		yield takeLatest(adminActionTypes.REMOVE_MANAGER, handleRemoveManagers),
		yield takeLatest(adminActionTypes.REMOVE_GAME, handleRemoveGame),
	]);
}

export function* handleGetOverviewData() {
	try {
		const { data } = yield call(processRequest, '/admin/games');
		yield put(adminActions.getOverviewSuccess(data));
	} catch (e) {
		yield put(adminActions.getOverviewError(e));
	}
}

export function* handleGetManagers() {
	try {
		const { data } = yield call(processRequest, '/admin/users');
		yield put(adminActions.getManagersSuccess(data));
	} catch (e) {
		yield put(adminActions.getManagersError(e));
	}
}

export function* handleRemoveManagers({ payload }) {
	try {
		const { id } = payload || {};
		yield call(processRequest, `/admin/users`, 'DELETE', { userId: id });
		yield put(adminActions.removeManagerSuccess(id));
	} catch (e) {
		yield put(adminActions.removeManagerError(e));
	}
}

export function* handleRemoveGame({ payload }) {
	try {
		const { id } = payload || {};
		yield call(processRequest, `/admin/games`, 'DELETE', { id });
		yield put(adminActions.removeGameSuccess(id));
	} catch (e) {
		yield put(adminActions.removeGameError(e));
	}
}
