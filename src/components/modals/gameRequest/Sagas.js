import { put, call, takeLatest, all } from 'redux-saga/effects';
import { processRequest } from '../../../services/Api';
import { gameRequestModalActionTypes } from './Constants';
import * as gameRequestActions from './Actions';
import * as notificationActions from '../../../components/notification/NotificationActions';

export default function* () {
	yield all([yield takeLatest(gameRequestModalActionTypes.GAME_REQUEST, handleGameRequest)]);
}

export function* handleGameRequest({ payload }) {
	try {
		const { data } = payload || {};
		yield call(processRequest, '/requests', 'POST', data);
		yield put(gameRequestActions.gameRequestSuccess());
	} catch (e) {
		yield put(gameRequestActions.gameRequestError(e));
	}
}
