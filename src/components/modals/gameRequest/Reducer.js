import { gameRequestModalActionTypes } from './Constants';
import Cookies from 'js-cookie';
import { reset } from 'redux-form';

const initialState = {
	open: false,
	submitLoading: false,
	submitted: false,
};

export default function gameRequestReducer(state = initialState, action) {
	const { type, payload } = action || {};
	const { data } = payload || {};

	switch (type) {
		case gameRequestModalActionTypes.TOGGLE_GAME_REQUEST_MODAL:
			return {
				...state,
				...data,
			};
		case gameRequestModalActionTypes.GAME_REQUEST:
			return {
				...state,
				submitLoading: true,
			};

		case gameRequestModalActionTypes.GAME_REQUEST_SUCCESS:
			// Cookies.set('requestFormSubmitted', true, { expires: 1 });
			return {
				...state,
				submitted: true,
				submitLoading: false,
			};

		case gameRequestModalActionTypes.GAME_REQUEST_ERROR:
			return {
				...state,
				submitLoading: false,
			};

		case gameRequestModalActionTypes.CLEAR_GAME_REQUEST_MODAL_STATE:
			reset('gameRequestForm');
			return initialState;

		default:
			return state;
	}
}
