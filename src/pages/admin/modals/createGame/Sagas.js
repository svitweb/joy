import { processRequest } from '../../../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { createGameModalActionTypes } from './Constants';
import * as createManagerActions from './Actions';
import * as notificationActions from '../../../../components/notification/NotificationActions';
import * as adminActions from '../../Actions';

export default function* () {
	yield all([yield takeLatest(createGameModalActionTypes.CREATE_GAME, handleCreateGame)]);
}

export function* handleCreateGame({ payload }) {
	try {
		const { data } = yield call(processRequest, '/admin/games', 'POST', payload);
		yield put(createManagerActions.createGameSuccess(data));
		yield put(adminActions.addGameToList(data));
	} catch (e) {
		yield put(createManagerActions.createGameError(e));
		yield put(notificationActions.createNotification('ERROR'));
	}
}
