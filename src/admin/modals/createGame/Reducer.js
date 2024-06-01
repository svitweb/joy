import { createGameModalActionTypes } from './Constants';

const initialState = {
	open: false,
	submitLoading: false,
	editData: null,
	loadingPlayers: false,
	players: [],
};

export default function createGameReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case createGameModalActionTypes.TOGGLE_CREATE_GAME_MODAL:
			return {
				...state,
				...data,
			};
		case createGameModalActionTypes.GET_PLAYERS:
			return {
				...state,
				loadingPlayers: true,
			};
		case createGameModalActionTypes.GET_PLAYERS_SUCCESS:
			return {
				...state,
				players: data,
				loadingPlayers: false,
			};
		case createGameModalActionTypes.GET_PLAYERS_ERROR:
			return {
				...state,
				loadingPlayers: false,
			};
		case createGameModalActionTypes.CREATE_GAME:
			return {
				...state,
				submitLoading: true,
			};
		case createGameModalActionTypes.CREATE_GAME_SUCCESS:
			return {
				...state,
				submitLoading: false,
				open: false,
			};
		case createGameModalActionTypes.CREATE_GAME_ERROR:
			return {
				...state,
				submitLoading: false,
			};
		case createGameModalActionTypes.CLEAR_CREATE_GAME_STATE:
			return initialState;
		default:
			return state;
	}
}
