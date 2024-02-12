import { menuActionTypes } from './Constants';

export function logOut() {
	return {
		type: menuActionTypes.LOG_OUT,
		payload: {},
	};
}

export function toggleCreateListModal(status) {
	return {
		type: menuActionTypes.TOGGLE_CREATE_LIST_MODAL,
		payload: {
			status,
		},
	};
}

export function toggleJoinListModal(status) {
	return {
		type: menuActionTypes.TOGGLE_JOIN_LIST_MODAL,
		payload: {
			status,
		},
	};
}

export function createList(name, password) {
	return {
		type: menuActionTypes.CREATE_LIST,
		payload: {
			name,
			password
		},
	};
}

export function joinList(password) {
	return {
		type: menuActionTypes.JOIN_LIST,
		payload: {
			password
		},
	};
}