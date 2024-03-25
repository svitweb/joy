import keyMirror from 'keymirror';

export const adminActionTypes = keyMirror({
	GET_OVERVIEW_DATA: null,
	GET_OVERVIEW_DATA_SUCCESS: null,
	GET_OVERVIEW_DATA_ERROR: null,
	GET_MANAGERS: null,
	GET_MANAGERS_SUCCESS: null,
	GET_MANAGERS_ERROR: null,
	REMOVE_MANAGER: null,
	REMOVE_MANAGER_SUCCESS: null,
	REMOVE_MANAGER_ERROR: null,
	REMOVE_GAME: null,
	REMOVE_GAME_SUCCESS: null,
	REMOVE_GAME_ERROR: null,
	ADD_GAME_TO_LIST: null,
	ADD_MANAGER_TO_LIST: null,
	CLEAR_ADMIN_STATE: null,
});
