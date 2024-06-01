import keyMirror from 'keymirror';

export const signInActionTypes = keyMirror({
	TOGGLE_SIGN_IN_MODAL: null,
	SIGN_IN: null,
	SIGN_IN_SUCCESS: null,
	SIGN_IN_ERROR: null,
	SIGN_OUT: null,
	GET_USER_DATA: null,
	GET_USER_DATA_SUCCESS: null,
	GET_USER_DATA_ERROR: null,
});
