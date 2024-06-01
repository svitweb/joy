import { processRequest } from '../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { adminActionTypes } from './Constants';
import * as adminActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';
// import { getAdminDataSuccess, loginAdminError, loginAdminSuccess } from './Actions';
import Cookies from 'js-cookie';
import {
	connectManagerSuccess,
	getRequestsSuccess,
	removeGameError,
	removeGameSuccess,
	removeManagerError,
	removeManagerSuccess,
} from './Actions';

export default function* () {
	yield all([
		yield takeLatest(adminActionTypes.GET_MANAGERS, handleGetManagers),
		yield takeLatest(adminActionTypes.REMOVE_MANAGER, handleRemoveManagers),
		yield takeLatest(adminActionTypes.REMOVE_GAME, handleRemoveGame),
		yield takeLatest(adminActionTypes.REMOVE_CODE, handleRemoveCode),
		yield takeLatest(adminActionTypes.GET_REQUESTS, handleGetRequests),
		yield takeLatest(adminActionTypes.CONNECT_MANAGER, handleConnectManager),
		yield takeLatest(adminActionTypes.GET_GAMES, handleGetGamesData),
	]);
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

export function* handleRemoveCode({ payload }) {
	try {
		const { data } = payload || {};
		const { gameId, codeId } = data || {};

		yield call(processRequest, `/admin/games/${gameId}`, 'DELETE', { id: codeId });
		yield put(adminActions.removeCodeSuccess(data));
	} catch (e) {
		yield put(adminActions.removeCodeError(e));
	}
}

export function* handleGetRequests({ payload }) {
	try {
		const { data } = payload || {};
		const { type, managerId } = data || {};

		const { data: respData } = yield call(
			processRequest,
			`/requests/${type}${managerId ? `/${managerId}` : ''}`,
			'GET',
		);
		yield put(adminActions.getRequestsSuccess(respData));
	} catch (e) {
		yield put(adminActions.getRequestsError(e));
	}
}

export function* handleConnectManager({ payload }) {
	try {
		const { data } = payload || {};

		const { data: respData } = yield call(processRequest, `/requests/${data.id}`, 'PUT', data);
		yield put(adminActions.connectManagerSuccess(respData));
	} catch (e) {
		yield put(adminActions.connectManagerError(e));
	}
}

export function* handleGetGamesData() {
	try {
		const { data } = yield call(processRequest, '/admin/games');
		yield put(adminActions.getGamesSuccess(data));
	} catch (e) {
		yield put(adminActions.getGamesError(e));
	}
}
