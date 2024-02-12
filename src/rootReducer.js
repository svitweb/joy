import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import signInReducer from './pages/signIn/SignInReducer';
import menuReducer from './pages/menu/Reducer';
import mainPageReducer from './pages/mainPage/Reducer';
import listPageReducer from './pages/listPage/ListPageReducer';
import notificationReducer from './components/notification/NotificationReducer';
import adminReducer from './pages/admin/Reducer';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		signInReducer,
		menuReducer,
		mainPageReducer,
		notificationReducer,
		listPageReducer,

		adminReducer,
	});

export default createRootReducer;
