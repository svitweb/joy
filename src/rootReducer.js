import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import menuReducer from './pages/menu/Reducer';
import mainPageReducer from './pages/mainPage/Reducer';
import notificationReducer from './components/notification/NotificationReducer';
import adminReducer from './pages/admin/Reducer';
import createManagerReducer from './pages/admin/modals/createManager/Reducer';
import signInReducer from './pages/admin/modals/signIn/Reducer';
import createGameReducer from './pages/admin/modals/createGame/Reducer';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		menuReducer,
		mainPageReducer,
		notificationReducer,

		adminReducer,
		createManagerReducer,
		signInReducer,
		createGameReducer,
	});

export default createRootReducer;
