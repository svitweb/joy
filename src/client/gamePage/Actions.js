import { gamePageActionTypes } from './Constants';

export function getGame(data) {
	return {
		type: gamePageActionTypes.GET_GAME,
		payload: { data },
	};
}

export function getGameSuccess(data) {
	return {
		type: gamePageActionTypes.GET_GAME_SUCCESS,
		payload: { data },
	};
}

export function getGameError(data) {
	return {
		type: gamePageActionTypes.GET_GAME_ERROR,
		payload: { data },
	};
}

export function changeData(data) {
	return {
		type: gamePageActionTypes.CHANGE_GAME_DATA,
		payload: { data },
	};
}
