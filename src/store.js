import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from "./rootSaga";
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

const history = createBrowserHistory();
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV !== 'production') {
	const logger = createLogger({
		level: 'info',
		collapsed: true,
	});

	middlewares.push(logger);
}

const composeEnhancers =
	process.env !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancers = composeEnhancers(
	applyMiddleware(
		sagaMiddleware,
		routerMiddleware(history),
		...middlewares
	)
);

const store = createStore(rootReducer(history), enhancers);
sagaMiddleware.run(rootSaga);
export {store, history};
