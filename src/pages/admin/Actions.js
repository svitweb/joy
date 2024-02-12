import { adminActionTypes } from './Constants';

export function toggleAdminLoginModal(data) {
	return {
		type: adminActionTypes.TOGGLE_ADMIN_LOGIN_MODAL,
		payload: { data },
	};
}

export function loginAdmin(name, password) {
	return {
		type: adminActionTypes.LOGIN_ADMIN,
		payload: { name, password },
	};
}

export function loginAdminSuccess(data) {
	return {
		type: adminActionTypes.LOGIN_ADMIN_SUCCESS,
		payload: { data },
	};
}

export function loginAdminError() {
	return {
		type: adminActionTypes.LOGIN_ADMIN_ERROR,
	};
}

export function getAdminData(id) {
	return {
		type: adminActionTypes.GET_ADMIN_DATA,
		payload: { id },
	};
}

export function getAdminDataSuccess(data) {
	return {
		type: adminActionTypes.GET_ADMIN_DATA_SUCCESS,
		payload: { data },
	};
}

export function getAdminDataError() {
	return {
		type: adminActionTypes.GET_ADMIN_DATA_ERROR,
	};
}

export function clearState() {
	return {
		type: adminActionTypes.CLEAR_ADMIN_STATE,
	};
}
