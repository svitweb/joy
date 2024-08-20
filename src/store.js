import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducerCreator from './rootReducer';
import rootSagaCreator from './rootSaga';
import { createLogger } from 'redux-logger/src';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
	const logger = createLogger({
		level: 'info',
		collapsed: true,
	});
	middlewares.push(logger);
}

const store = configureStore({
	reducer: rootReducerCreator(history),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSagaCreator);

export { store, history };
