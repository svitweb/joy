import { adminActionTypes } from './Constants';

// import Cookies from "js-cookie";
// import { COOKIES } from '../../services/Constants';

const initialState = {
	loadingOverview: false,
	overviewData: {},
	loadingManagers: false,
	managers: [],
};

export default function adminReducer(state = initialState, action) {
	const { type, payload } = action;
	const { id, data } = payload || {};

	switch (type) {
		case adminActionTypes.GET_OVERVIEW_DATA:
			return {
				...state,
				loadingOverview: true,
			};
		case adminActionTypes.GET_OVERVIEW_DATA_SUCCESS:
			return {
				...state,
				overviewData: data,
				loadingOverview: false,
			};
		case adminActionTypes.GET_OVERVIEW_DATA_ERROR:
			return {
				...state,
				loadingOverview: false,
			};
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
				overviewData: {
					...state.overviewData,
					games: state.overviewData.games?.filter((el) => el._id !== id),
				},
			};
		case adminActionTypes.ADD_GAME_TO_LIST:
			return {
				...state,
				overviewData: {
					...state.overviewData,
					games: [data, ...state.overviewData.games],
				},
			};
		case adminActionTypes.ADD_MANAGER_TO_LIST:
			return {
				...state,
				managers: [...state.managers, data],
			};
		case adminActionTypes.CLEAR_ADMIN_STATE:
			return initialState;
		default:
			return state;
	}
}
