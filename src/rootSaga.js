import { fork } from 'redux-saga/effects';
import menuSagas from './pages/menu/Sagas';
import mainPageSagas from './pages/mainPage/Sagas';
import listPageSagas from './pages/listPage/ListPageSagas';
import adminSagas from './pages/admin/Sagas';
import createManagerSagas from './pages/admin/modals/createManager/Sagas';
import signInSagas from './pages/admin/modals/signIn/Sagas';

export default function* rootSaga() {
	yield fork(menuSagas);
	yield fork(mainPageSagas);
	yield fork(listPageSagas);
	yield fork(adminSagas);
	yield fork(createManagerSagas);
	yield fork(signInSagas);
}
