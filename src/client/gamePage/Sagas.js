import { processRequest } from '../../services/Api';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { gamePageActionTypes } from './Constants';
import * as gameActions from './Actions';
// import * as notificationActions from '../../components/notification/NotificationActions';

export default function* () {
	yield all([takeLatest(gamePageActionTypes.GET_GAME, handleGetGame)]);
}

export function* handleGetGame({ payload }) {
	try {
		const { data } = payload || {};
		const { code } = data || {};

		yield call(processRequest, `/requests/game/${code}`, 'GET');

		yield put(gameActions.getGameSuccess());
	} catch (e) {
		yield put(gameActions.getGameError(e));
	}
}
