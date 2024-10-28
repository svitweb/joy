import { adminActionTypes } from './Constants';

// import Cookies from "js-cookie";
// import { COOKIES } from '../../services/Constants';

const initialState = {
	loadingGames: false,
	games: [],

	loadingManagers: false,
	managers: [],

	loadingRequests: true,
	requests: [],
};

export default function adminReducer(state = initialState, action) {
	const { type, payload } = action;
	const { id, data } = payload || {};
	const { codeId, gameId } = data || {};

	switch (type) {
		case adminActionTypes.GET_MANAGERS:
			return {
				...state,
				loadingManagers: true,
			};
		case adminActionTypes.GET_MANAGERS_SUCCESS:
			return {
				...state,
				managers: data,
				loadingManagers: false,
			};
		case adminActionTypes.GET_MANAGERS_ERROR:
			return {
				...state,
				loadingManagers: false,
			};
		case adminActionTypes.REMOVE_MANAGER_SUCCESS:
			return {
				...state,
				managers: state.managers.filter((el) => el._id !== id),
			};

		case adminActionTypes.REMOVE_GAME_SUCCESS:
			return {
				...state,
				games: state.games?.filter((el) => el._id !== id),
			};
		case adminActionTypes.REMOVE_CODE_SUCCESS:
			return {
				...state,
				overviewData: {
					...state.overviewData,
					games: state.overviewData.games?.map((game) =>
						game._id === gameId
							? {
									...game,
									codesCount: game.codesCount - 1,
									codes: game.codes.filter((code) => code.id !== codeId),
							  }
							: game,
					),
				},
			};
		case adminActionTypes.ADD_GAME_TO_LIST:
			return {
				...state,
				games: [data, ...state.games],
			};
		case adminActionTypes.UPDATE_GAME_IN_LIST:
			return {
				...state,
				games: state.games.map((game) => (game._id === data._id ? data : game)),
			};

		case adminActionTypes.ADD_MANAGER_TO_LIST:
			return {
				...state,
				managers: [...state.managers, data],
			};
		case adminActionTypes.CLEAR_ADMIN_STATE:
			return initialState;

		case adminActionTypes.GET_REQUESTS:
			return {
				...state,
				loadingRequests: true,
			};
		case adminActionTypes.GET_REQUESTS_SUCCESS:
			return {
				...state,
				requests: data,
				loadingRequests: false,
			};
		case adminActionTypes.GET_REQUESTS_ERROR:
			return {
				...state,
				loadingRequests: false,
			};
		case adminActionTypes.CONNECT_MANAGER:
			return {
				...state,
				loadingConnectManager: true,
			};
		case adminActionTypes.CONNECT_MANAGER_SUCCESS:
			return {
				...state,
				requests: data ? state.requests.filter((el) => el._id !== data.id) : state.requests,
				loadingConnectManager: false,
			};
		case adminActionTypes.CONNECT_MANAGER_ERROR:
			return {
				...state,
				loadingConnectManager: false,
			};

		case adminActionTypes.GET_GAMES:
			return {
				...state,
				loadingGames: true,
			};
		case adminActionTypes.GET_GAMES_SUCCESS:
			return {
				...state,
				games: data,
				loadingGames: false,
			};
		case adminActionTypes.START_GAME_SUCCESS:
			return {
				...state,
				games: [
					...state.games.map((game) =>
						game._id === data.id
							? {
									...game,
									started: game._id === data.id,
									end: !!data.end,
							  }
							: game,
					),
				],
			};
		case adminActionTypes.GET_GAMES_ERROR:
			return {
				...state,
				loadingGames: false,
			};
		default:
			return state;
	}
}
