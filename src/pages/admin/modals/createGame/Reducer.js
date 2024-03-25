import { createGameModalActionTypes } from './Constants';

const initialState = {
	open: false,
	submitLoading: false,
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
		default:
			return state;
	}
}
