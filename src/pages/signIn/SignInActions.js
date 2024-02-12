import { signInActionTypes } from './SignInConstants';
export function loginRequest(token) {
	return {
		type: signInActionTypes.LOGIN_REQUEST,
		payload: {
			token
		},
	};
}

export function loginSuccess(token) {
	return {
		type: signInActionTypes.LOGIN_SUCCESS,
		payload: {
			token,
		},
	};
}

export function loginError(error) {
	return {
		type: signInActionTypes.LOGIN_ERROR,
		error: true,
		payload: {
			error,
		},
	};
}
