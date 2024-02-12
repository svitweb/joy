import { fork } from 'redux-saga/effects';
import signInSagas from './pages/signIn/SignInSagas';
import menuSagas from './pages/menu/Sagas';
import mainPageSagas from './pages/mainPage/Sagas';
import listPageSagas from './pages/listPage/ListPageSagas';
import adminSagas from './pages/admin/Sagas';

export default function* rootSaga() {
	yield fork(signInSagas);
	yield fork(menuSagas);
	yield fork(mainPageSagas);
	yield fork(listPageSagas);
	yield fork(adminSagas);
}
