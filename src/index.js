import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './styles/main.scss';
import './utils/localization/i18next';
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
