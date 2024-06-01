import { gameRequestModalActionTypes } from './Constants';

export function toggleGameRequestModal(data) {
	return {
		type: gameRequestModalActionTypes.TOGGLE_GAME_REQUEST_MODAL,
		payload: { data },
	};
}

export function gameRequest(data) {
	return {
		type: gameRequestModalActionTypes.GAME_REQUEST,
		payload: { data },
	};
}

export function gameRequestSuccess() {
	return {
		type: gameRequestModalActionTypes.GAME_REQUEST_SUCCESS,
	};
}

export function gameRequestError() {
	return {
		type: gameRequestModalActionTypes.GAME_REQUEST_ERROR,
	};
}

export function clearState() {
	return {
		type: gameRequestModalActionTypes.CLEAR_GAME_REQUEST_MODAL_STATE,
	};
}
