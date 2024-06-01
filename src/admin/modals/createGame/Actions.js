import { createGameModalActionTypes } from './Constants';

export function toggleCreateGameModal(data) {
	return {
		type: createGameModalActionTypes.TOGGLE_CREATE_GAME_MODAL,
		payload: { data },
	};
}

export function getPlayers(data) {
	return {
		type: createGameModalActionTypes.GET_PLAYERS,
		payload: { data },
	};
}

export function getPlayersSuccess(data) {
	return {
		type: createGameModalActionTypes.GET_PLAYERS_SUCCESS,
		payload: { data },
	};
}

export function getPlayersError() {
	return {
		type: createGameModalActionTypes.GET_PLAYERS_ERROR,
	};
}

export function createGame(data) {
	return {
		type: createGameModalActionTypes.CREATE_GAME,
		payload: { data },
	};
}

export function createGameSuccess(data) {
	return {
		type: createGameModalActionTypes.CREATE_GAME_SUCCESS,
		payload: { data },
	};
}

export function createGameError() {
	return {
		type: createGameModalActionTypes.CREATE_GAME_ERROR,
	};
}

export function clearState() {
	return {
		type: createGameModalActionTypes.CLEAR_CREATE_GAME_STATE,
	};
}
