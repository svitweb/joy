import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import menuReducer from './components/menu/Reducer';
import mainPageReducer from './client/mainPage/Reducer';
import notificationReducer from './components/notification/NotificationReducer';
import gameRequestReducer from './components/modals/gameRequest/Reducer';
import cardModalReducer from './components/modals/card/Reducer';
import labyrinthQuestionModalReducer from './components/modals/labyrinthQuestion/Reducer';
import towerModalReducer from './components/modals/tower/Reducer';
import gamePageReducer from './client/gamePage/Reducer';

import adminReducer from './admin/Reducer';
import createManagerReducer from './admin/modals/createManager/Reducer';
import signInReducer from './admin/modals/signIn/Reducer';
import createGameReducer from './admin/modals/createGame/Reducer';
import connectEmailReducer from './admin/modals/connectEmail/Reducer';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		menuReducer,
		mainPageReducer,
		gameRequestReducer,
		notificationReducer,
		cardModalReducer,
		labyrinthQuestionModalReducer,
		towerModalReducer,
		gamePageReducer,

		adminReducer,
		createManagerReducer,
		signInReducer,
		createGameReducer,
		connectEmailReducer,
	});

export default createRootReducer;
