import { fork } from 'redux-saga/effects';
import menuSagas from './components/menu/Sagas';
import mainPageSagas from './client/mainPage/Sagas';
import gameRequestReducer from './components/modals/gameRequest/Sagas';

import adminSagas from './admin/Sagas';
import createManagerSagas from './admin/modals/createManager/Sagas';
import signInSagas from './admin/modals/signIn/Sagas';
import createGameSagas from './admin/modals/createGame/Sagas';
import connectEmailSagas from './admin/modals/connectEmail/Sagas';

export default function* rootSaga() {
	yield fork(menuSagas);
	yield fork(mainPageSagas);
	yield fork(gameRequestReducer);
	yield fork(adminSagas);
	yield fork(createManagerSagas);
	yield fork(signInSagas);
	yield fork(createGameSagas);
	yield fork(connectEmailSagas);
}
