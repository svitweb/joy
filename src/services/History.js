import { history } from '../store';

export const historyPush = (route, data = {}) => history.push(route, data);
export const historyReplace = (route, data = {}) => history.replace(route, data);
