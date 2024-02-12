// import { processRequest } from '../../services/Api';
import { put, takeLatest, all } from 'redux-saga/effects';
import { adminActionTypes } from './Constants';
import * as adminActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';
// import { getAdminDataSuccess, loginAdminError, loginAdminSuccess } from './Actions';
import Cookies from 'js-cookie';

export default function* () {
	yield all([
		yield takeLatest(adminActionTypes.GET_ADMIN_DATA, handleGetAdminData),
		yield takeLatest(adminActionTypes.LOGIN_ADMIN, handleLoginAdminData),
	]);
}

export function* handleGetAdminData() {
	try {
		// const { data } = yield call(processRequest, '/profile/playlists');
		yield put(
			adminActions.getAdminDataSuccess([
				{
					id: 1,
					role: 'admin',
					name: 'Infro',
					email: 'infro11+pro@ukr.net',
					games: [
						{ id: 1, name: 'game 1', codes: ['code 1', 'code 2', 'code 3', 'code 4'] },
						{ id: 2, name: 'game 2', codes: ['code 1', 'code 2'] },
						{ id: 3, name: 'game 3', codes: ['code 1'] },
					],
				},
				{
					id: 2,
					role: 'manager',
					name: 'Manager',
					email: 'manager@ukr.net',
					games: [{ id: 1, name: 'game 1', codes: ['code 1'] }],
				},
			]),
		);
	} catch (e) {
		yield put(adminActions.getAdminDataError(e));
	}
}

export function* handleLoginAdminData({ payload }) {
	try {
		const { name, password } = payload || {};
		// const { data } = yield call(processRequest, '/profile/playlists');
		Cookies.set('adminAccess', { name, password });
		yield put(adminActions.loginAdminSuccess());
	} catch (e) {
		yield put(adminActions.loginAdminError(e));
	}
}
