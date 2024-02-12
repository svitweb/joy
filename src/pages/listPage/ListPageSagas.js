import {processRequest} from '../../services/Api';
import {put, call, takeLatest, all} from 'redux-saga/effects';
import {listPageActionTypes} from './ListPageConstants';
import * as listPageActions from './ListPageActions';
import {replace} from 'connected-react-router';
// import { stopSubmit } from 'redux-form';
import Cookies from "js-cookie";
import {history} from '../../store';

export default function* () {
	yield all([
		yield takeLatest(listPageActionTypes.GET_LIST_DETAILS, handleGetList),
		yield takeLatest(listPageActionTypes.ADD_SONG, handleAddSong),
		yield takeLatest(listPageActionTypes.RATE_SONG, handleRateSong),
		yield takeLatest(listPageActionTypes.CREATE_LIST, handleCreateList),
		yield takeLatest(listPageActionTypes.EDIT_LIST, handleEditList),
		yield takeLatest(listPageActionTypes.DELETE_LIST, handleDeleteList),
		yield takeLatest(listPageActionTypes.LOG_OUT, handleLogOut),
	]);
}

export function* handleGetList(action) {
	try {
		const {id} = action.payload;
		// debugger;
		const {data} = yield call(processRequest, `/playlists/${id}`);

		yield put(listPageActions.getListSuccess(data, id));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleAddSong(action) {
	try {
		const {listId, data} = action.payload;
		yield call(processRequest, `/playlists/${listId}/songs`, 'POST', data);

		yield put(listPageActions.getListDetails(listId));
		// yield put(replace('/'));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleRateSong(action) {
	try {
		const {listId, songId, data} = action.payload;
		yield call(processRequest, `/playlists/${listId}/songs/${songId}/vote`, 'POST', data);

		// yield put(mainPageActions.getList());
		// yield put(replace('/'));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleCreateList(action) {
	try {
		const {name, password} = action.payload;
		 yield call(processRequest, '/playlists', 'POST', {'name':name,'code':password});

		// yield put(listPageActions.getList());
		// yield put(replace('/'));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleEditList(action) {
	try {
		const {name, password, id} = action.payload;

		 yield call(processRequest, `/playlists/${id}`, 'PUT', {'name':name,'code':password});

		// yield put(mainPageActions.getList());
		// yield put(replace('/'));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleDeleteList(action) {
	try {
		const {id} = action.payload;
		 yield call(processRequest, `/playlists/${id}`, 'DELETE');

		// yield put(mainPageActions.getList());
		// yield put(replace('/'));

	} catch (e) {
		// yield put(mainPageActions.loginError(e));
	}
}

export function* handleLogOut() {
	Cookies.remove('accessToken');
	yield put(replace('/sign-in'));
}
