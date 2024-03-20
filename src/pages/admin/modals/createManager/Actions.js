import { createManagerModalActionTypes } from './Constants';

export function toggleCreateManagerModal(data) {
	return {
		type: createManagerModalActionTypes.TOGGLE_CREATE_MANAGER_MODAL,
		payload: { data },
	};
}

export function createManager(name, email, password) {
	return {
		type: createManagerModalActionTypes.CREATE_MANAGER,
		payload: { name, email, password },
	};
}

export function createManagerSuccess(data) {
	return {
		type: createManagerModalActionTypes.CREATE_MANAGER_SUCCESS,
		payload: { data },
	};
}

export function createManagerError() {
	return {
		type: createManagerModalActionTypes.CREATE_MANAGER_ERROR,
	};
}
