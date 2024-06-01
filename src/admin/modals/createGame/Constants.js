import keyMirror from 'keymirror';

export const createGameModalActionTypes = keyMirror({
	TOGGLE_CREATE_GAME_MODAL: null,
	GET_PLAYERS: null,
	GET_PLAYERS_SUCCESS: null,
	GET_PLAYERS_ERROR: null,
	CREATE_GAME: null,
	CREATE_GAME_SUCCESS: null,
	CREATE_GAME_ERROR: null,
	CLEAR_CREATE_GAME_STATE: null,
});
