import { cardModalActionTypes } from './Constants';

const initialState = {
	open: false,
	cardData: {},
};

export default function cardModalReducer(state = initialState, action) {
	const { type, payload } = action || {};
	const { data } = payload || {};

	switch (type) {
		case cardModalActionTypes.TOGGLE_CARD_MODAL:
			return {
				...state,
				...data,
			};
		default:
			return state;
	}
}
