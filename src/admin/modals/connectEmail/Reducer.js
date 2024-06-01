import { connectEmailModalActionTypes } from './Constants';

const initialState = {
	open: false,
	submitLoading: false,
	gameId: null,
	codeId: null,
};

export default function connectEmailReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case connectEmailModalActionTypes.TOGGLE_CONNECT_EMAIL_MODAL:
			return {
				...state,
				...data,
			};
		case connectEmailModalActionTypes.CONNECT_EMAIL:
			return {
				...state,
				submitLoading: true,
			};
		case connectEmailModalActionTypes.CONNECT_EMAIL_SUCCESS:
			return {
				...state,
				submitLoading: false,
				open: false,
			};
		case connectEmailModalActionTypes.CONNECT_EMAIL_ERROR:
			return {
				...state,
				submitLoading: false,
			};
		case connectEmailModalActionTypes.CLEAR_CONNECT_EMAIL_MODAL_STATE:
			return initialState;
		default:
			return state;
	}
}
