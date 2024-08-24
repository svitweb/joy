import { towerModalActionTypes } from './Constants';

const initialState = {
	open: false,
};

export default function towerModalReducer(state = initialState, action) {
	const { type, payload } = action || {};
	const { data } = payload || {};

	switch (type) {
		case towerModalActionTypes.TOGGLE_TOWER_MODAL:
			return {
				...state,
				...data,
			};
		case towerModalActionTypes.CLEAR_TOWER_MODAL_STATE:
			return initialState;
		default:
			return state;
	}
}
