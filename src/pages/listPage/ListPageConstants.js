import keyMirror from 'keymirror';

export const listPageActionTypes = keyMirror(
	{
		GET_LIST_DETAILS: null,
		GET_LIST_DETAILS_SUCCESS: null,
		CREATE_LIST: null,
		ADD_SONG: null,
		RATE_SONG: null,
		EDIT_LIST: null,
		DELETE_LIST: null,
		LOG_OUT: null,
		UPDATE_PLAYLIST_SONGS: null,
	}
);
