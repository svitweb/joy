import { adminActionTypes } from './Constants';

export function getOverview() {
	return {
		type: adminActionTypes.GET_OVERVIEW_DATA,
	};
}

export function getOverviewSuccess(data) {
	return {
		type: adminActionTypes.GET_OVERVIEW_DATA_SUCCESS,
		payload: { data },
	};
}

export function getOverviewError() {
	return {
		type: adminActionTypes.GET_OVERVIEW_DATA_ERROR,
	};
}

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

export function addGameToList(data) {
	return {
		type: adminActionTypes.ADD_GAME_TO_LIST,
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
