import { createGameModalActionTypes } from './Constants';

export function toggleCreateGameModal(data) {
	return {
		type: createGameModalActionTypes.TOGGLE_CREATE_GAME_MODAL,
		payload: { data },
	};
}

export function createGame(name, codesCount) {
	return {
		type: createGameModalActionTypes.CREATE_GAME,
		payload: { name, codesCount },
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
