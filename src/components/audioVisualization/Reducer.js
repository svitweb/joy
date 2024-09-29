import { audioVisualizationActionTypes } from './Constants';

const initialState = {
	audioFileName: null,
};

export default function audioVisualizationReducer(state = initialState, action) {
	const { type, payload } = action || {};
	const { data } = payload || {};

	switch (type) {
		case audioVisualizationActionTypes.SET_AUDIO_VISUALIZATION:
			return {
				...state,
				...data,
			};
		default:
			return state;
	}
}
