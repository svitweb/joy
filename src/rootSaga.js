import { fork } from 'redux-saga/effects';
import menuSagas from './pages/menu/Sagas';
import mainPageSagas from './pages/mainPage/Sagas';
import adminSagas from './pages/admin/Sagas';
import createManagerSagas from './pages/admin/modals/createManager/Sagas';
import signInSagas from './pages/admin/modals/signIn/Sagas';
import createGameSagas from './pages/admin/modals/createGame/Sagas';

export default function* rootSaga() {
	yield fork(menuSagas);
	yield fork(mainPageSagas);
	yield fork(adminSagas);
	yield fork(createManagerSagas);
	yield fork(signInSagas);
	yield fork(createGameSagas);
}
