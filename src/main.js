import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './styles/main.scss';
import './utils/localization/i18next';
import React, { Suspense } from 'react';

import App from './App';
import ReactDOM from 'react-dom/client';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './store';
import { Provider } from 'react-redux';

const RootElement = ReactDOM.createRoot(document.getElementById('root'));
RootElement.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Suspense fallback={<></>}>
				<App />
			</Suspense>
		</ConnectedRouter>
	</Provider>,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
