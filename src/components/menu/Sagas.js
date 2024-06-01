import { processRequest } from '../../services/Api';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { menuActionTypes } from './Constants';
import * as menuActions from './Actions';
import { push, replace } from 'connected-react-router';
import { stopSubmit } from 'redux-form';
import Cookies from 'js-cookie';
import * as mainPageActions from '../../client/mainPage/Actions';
import * as notificationActions from '../../components/notification/NotificationActions';

export default function* () {
	yield all([
		yield takeLatest(menuActionTypes.LOG_OUT, handleLogOut),
		// yield takeLatest(menuActionTypes.CREATE_LIST, handleCreateList),
		// yield takeLatest(menuActionTypes.JOIN_LIST, handleJoinList),
	]);
}

export function* handleLogOut() {
	Cookies.remove('accessToken');
	yield put(replace('/sign-in'));
}

// export function* handleCreateList(action) {
// 	try {
// 		const { name, password } = action.payload;
//
// 		const { data } = yield call(processRequest, '/playlists', 'POST', {
// 			name: name,
// 			code: password,
// 		});
//
// 		yield put(mainPageActions.getList());
// 		yield put(menuActions.toggleCreateListModal(false));
// 		yield put(push(`/list/${data._id}`));
// 		yield put(
// 			notificationActions.createNotification('List successfully created!', null, false, 5000),
// 		);
// 	} catch (e) {
// 		yield put(stopSubmit('createList', { password: e.response.data.message }));
// 	}
// }
//
// export function* handleJoinList(action) {
// 	try {
// 		const { password } = action.payload;
//
// 		const { data } = yield call(processRequest, `/playlists/join?code=${password}`);
//
// 		yield put(mainPageActions.getList());
// 		yield put(menuActions.toggleJoinListModal(false));
// 		yield put(push(`/list/${data.playlistId}`));
// 	} catch (e) {
// 		yield put(stopSubmit('joinList', { password: e.response.data.message }));
// 	}
// }
