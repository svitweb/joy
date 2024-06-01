// import { processRequest } from '../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { signInActionTypes } from './Constants';
import * as signInActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';
// import { getAdminDataSuccess, loginAdminError, loginAdminSuccess } from './Actions';
import Cookies from 'js-cookie';
import { processRequest } from '../../../services/Api';
import { getUserDataSuccess } from './Actions';

export default function* () {
	yield all([
		yield takeLatest(signInActionTypes.SIGN_IN, handleSignIn),
		yield takeLatest(signInActionTypes.SIGN_OUT, handleSignOut),
		yield takeLatest(signInActionTypes.GET_USER_DATA, handleGetUserData),
	]);
}

export function* handleSignIn({ payload }) {
	try {
		const { email, password } = payload || {};
		const { data } = yield call(processRequest, '/auth/sign_in', 'POST', payload);
		// Cookies.set('adminAccess', { email, password });
		Cookies.set('accessToken', data.token);
		yield put(signInActions.signInSuccess(data?.data));
	} catch (e) {
		yield put(signInActions.signInError(e));
	}
}

export function* handleSignOut() {
	try {
		yield call(processRequest, '/auth/session', 'DELETE');
		Cookies.remove('accessToken');
		// yield put(signInActions.loginAdminSuccess());
	} catch (e) {
		// yield put(signInActions.loginAdminError(e));
	}
}

export function* handleGetUserData() {
	try {
		const { data } = yield call(processRequest, '/admin/get_user_data', 'GET');
		yield put(signInActions.getUserDataSuccess(data));
	} catch (e) {
		yield put(signInActions.getUserDataError(e));
	}
}
