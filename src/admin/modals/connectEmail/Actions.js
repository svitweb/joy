import { connectEmailModalActionTypes } from './Constants';

export function toggleConnectEmailModal(data) {
	return {
		type: connectEmailModalActionTypes.TOGGLE_CONNECT_EMAIL_MODAL,
		payload: { data },
	};
}

export function connectEmail(data) {
	return {
		type: connectEmailModalActionTypes.CONNECT_EMAIL,
		payload: { data },
	};
}

export function connectEmailSuccess(data) {
	return {
		type: connectEmailModalActionTypes.CONNECT_EMAIL_SUCCESS,
		payload: { data },
	};
}

export function connectEmailError() {
	return {
		type: connectEmailModalActionTypes.CONNECT_EMAIL_ERROR,
	};
}

export function clearState() {
	return {
		type: connectEmailModalActionTypes.CLEAR_CONNECT_EMAIL_MODAL_STATE,
	};
}
