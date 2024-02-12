import { processRequest } from '../../services/Api';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { mainPageActionTypes } from './Constants';
import * as mainPageActions from './Actions';
import * as notificationActions from '../../components/notification/NotificationActions';

export default function* () {
	yield all([
		yield takeLatest(mainPageActionTypes.GET_LIST, handleGetList),
		yield takeLatest(mainPageActionTypes.EDIT_LIST, handleEditList),
		yield takeLatest(mainPageActionTypes.DELETE_LIST, handleDeleteList),
	]);
}

export function* handleGetList() {
	try {
		const { data } = yield call(processRequest, '/profile/playlists');

		yield put(mainPageActions.getListSuccess(data));
		// yield put(replace('/'));
	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleEditList(action) {
	try {
		const { name, password, id } = action.payload;
		yield call(processRequest, `/playlists/${id}`, 'PUT', { name: name, code: password });
		yield put(mainPageActions.getList());
		yield put(
			notificationActions.createNotification('List successfully edited!', null, false, 5000),
		);
	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleDeleteList(action) {
	try {
		const { id } = action.payload;
		yield call(processRequest, `/playlists/${id}`, 'DELETE');

		yield put(mainPageActions.getList());
		// yield put(replace('/'));
		yield put(
			notificationActions.createNotification('List successfully deleted!', null, false, 5000),
		);
	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}
