import { mainPageActionTypes } from './Constants';

export function contactRequest(data) {
	return {
		type: mainPageActionTypes.CONTACT_REQUEST,
		payload: { data },
	};
}

export function contactRequestSuccess() {
	return {
		type: mainPageActionTypes.CONTACT_REQUEST_SUCCESS,
	};
}

export function contactRequestError() {
	return {
		type: mainPageActionTypes.CONTACT_REQUEST_ERROR,
	};
}

export function setSubmittedState(data) {
	return {
		type: mainPageActionTypes.SET_SUBMITTED_STATE,
		payload: { data },
	};
}

export function clearContactRequestForm() {
	return {
		type: mainPageActionTypes.CLEAR_CONTACT_REQUEST_FORM,
	};
}
