import { processRequest } from '../../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createGameModalActionTypes } from './Constants';
import * as createManagerActions from './Actions';
import * as notificationActions from '../../../components/notification/NotificationActions';
import * as adminActions from '../../Actions';

export default function* () {
	yield all([
		takeLatest(createGameModalActionTypes.CREATE_GAME, handleCreateGame),
		takeLatest(createGameModalActionTypes.GET_PLAYERS, handleGetPlayers),
	]);
}

export function* handleCreateGame({ payload }) {
	try {
		const { data: formData } = payload || {};
		const { editId } = formData || {};

		const { data } = yield call(
			processRequest,
			`/admin/games${editId ? `/${editId}` : ''}`,
			'POST',
			formData,
		);
		yield put(createManagerActions.createGameSuccess(data));
		if (editId) {
			yield put(adminActions.updateGameInList(data));
		} else {
			yield put(adminActions.addGameToList(data));
		}
	} catch (e) {
		yield put(createManagerActions.createGameError(e));
		yield put(notificationActions.createNotification(e));
	}
}

export function* handleGetPlayers({ payload }) {
	try {
		const { data: formData } = payload || {};
		const { managerId } = formData || {};

		const { data } = yield call(processRequest, `/requests/pending/${managerId}`);
		yield put(createManagerActions.getPlayersSuccess(data));
	} catch (e) {
		yield put(createManagerActions.getPlayersError(e));
		yield put(notificationActions.createNotification(e));
	}
}
