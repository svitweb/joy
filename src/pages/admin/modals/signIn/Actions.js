import { signInActionTypes } from './Constants';

export function toggleSignInModal(data) {
	return {
		type: signInActionTypes.TOGGLE_SIGN_IN_MODAL,
		payload: { data },
	};
}

export function signIn(email, password) {
	return {
		type: signInActionTypes.SIGN_IN,
		payload: { email, password },
	};
}

export function signInSuccess(data) {
	return {
		type: signInActionTypes.SIGN_IN_SUCCESS,
		payload: { data },
	};
}

export function signInError() {
	return {
		type: signInActionTypes.SIGN_IN_ERROR,
	};
}

export function signOut() {
	return {
		type: signInActionTypes.SIGN_OUT,
	};
}

export function getUserData() {
	return {
		type: signInActionTypes.GET_USER_DATA,
	};
}

export function getUserDataSuccess(data) {
	return {
		type: signInActionTypes.GET_USER_DATA_SUCCESS,
		payload: { data },
	};
}

export function getUserDataError() {
	return {
		type: signInActionTypes.GET_USER_DATA_ERROR,
	};
}
