import keyMirror from 'keymirror';

export const adminActionTypes = keyMirror({
	TOGGLE_ADMIN_LOGIN_MODAL: null,
	LOGIN_ADMIN: null,
	LOGIN_ADMIN_SUCCESS: null,
	LOGIN_ADMIN_ERROR: null,
	GET_ADMIN_DATA: null,
	GET_ADMIN_DATA_SUCCESS: null,
	GET_ADMIN_DATA_ERROR: null,
	CREATE_USER: null,
	CREATE_USER_SUCCESS: null,
	CREATE_USER_ERROR: null,
	CLEAR_ADMIN_STATE: null,
});
