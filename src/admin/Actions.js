import { adminActionTypes } from './Constants';

export function getManagers() {
	return {
		type: adminActionTypes.GET_MANAGERS,
	};
}

export function getManagersSuccess(data) {
	return {
		type: adminActionTypes.GET_MANAGERS_SUCCESS,
		payload: { data },
	};
}

export function getManagersError() {
	return {
		type: adminActionTypes.GET_MANAGERS_ERROR,
	};
}

export function removeManager(id) {
	return {
		type: adminActionTypes.REMOVE_MANAGER,
		payload: { id },
	};
}

export function removeManagerSuccess(id) {
	return {
		type: adminActionTypes.REMOVE_MANAGER_SUCCESS,
		payload: { id },
	};
}

export function removeManagerError() {
	return {
		type: adminActionTypes.REMOVE_MANAGER_ERROR,
	};
}

export function removeGame(id) {
	return {
		type: adminActionTypes.REMOVE_GAME,
		payload: { id },
	};
}

export function removeGameSuccess(id) {
	return {
		type: adminActionTypes.REMOVE_GAME_SUCCESS,
		payload: { id },
	};
}

export function removeGameError() {
	return {
		type: adminActionTypes.REMOVE_GAME_ERROR,
	};
}

export function removeCode(data) {
	return {
		type: adminActionTypes.REMOVE_CODE,
		payload: { data },
	};
}

export function removeCodeSuccess(data) {
	return {
		type: adminActionTypes.REMOVE_CODE_SUCCESS,
		payload: { data },
	};
}

export function removeCodeError() {
	return {
		type: adminActionTypes.REMOVE_CODE_ERROR,
	};
}

export function addGameToList(data) {
	return {
		type: adminActionTypes.ADD_GAME_TO_LIST,
		payload: { data },
	};
}

export function updateGameInList(data) {
	return {
		type: adminActionTypes.UPDATE_GAME_IN_LIST,
		payload: { data },
	};
}

export function addManagerToList(data) {
	return {
		type: adminActionTypes.ADD_MANAGER_TO_LIST,
		payload: { data },
	};
}

export function clearState() {
	return {
		type: adminActionTypes.CLEAR_ADMIN_STATE,
	};
}

export function getRequests(data) {
	return {
		type: adminActionTypes.GET_REQUESTS,
		payload: { data },
	};
}

export function getRequestsSuccess(data) {
	return {
		type: adminActionTypes.GET_REQUESTS_SUCCESS,
		payload: { data },
	};
}

export function getRequestsError() {
	return {
		type: adminActionTypes.GET_REQUESTS_ERROR,
	};
}

export function connectManager(data) {
	return {
		type: adminActionTypes.CONNECT_MANAGER,
		payload: { data },
	};
}

export function connectManagerSuccess() {
	return {
		type: adminActionTypes.CONNECT_MANAGER_SUCCESS,
	};
}

export function connectManagerError() {
	return {
		type: adminActionTypes.CONNECT_MANAGER_ERROR,
	};
}

export function getGames() {
	return {
		type: adminActionTypes.GET_GAMES,
	};
}

export function getGamesSuccess(data) {
	return {
		type: adminActionTypes.GET_GAMES_SUCCESS,
		payload: { data },
	};
}

export function getGamesError() {
	return {
		type: adminActionTypes.GET_GAMES_ERROR,
	};
}
