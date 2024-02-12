import {processRequest} from '../../services/Api';
import {put, call, takeLatest, all} from 'redux-saga/effects';
import {signInActionTypes} from './SignInConstants';
import * as signInActions from './SignInActions';
import {replace} from 'connected-react-router';
// import { stopSubmit } from 'redux-form';
import Cookies from "js-cookie";
import { COOKIES } from '../../services/Constants';

export default function* () {
	yield all([
		yield takeLatest(signInActionTypes.LOGIN_REQUEST, handleLoginRequest),
	]);
}

export function* handleLoginRequest(action) {
	try {
		Cookies.remove('accessToken');
		const {data} = yield call(processRequest, `/auth/fb`, 'POST', action.payload);
		Cookies.set('accessToken', data['auth-token']);
		yield put(signInActions.loginSuccess(data));
    return yield put(replace('/'));
	} catch (e) {
		// yield put(stopSubmit('signInForm', {password: e.response.data.info}));
		yield put(signInActions.loginError(e));
	}
}