import { labyrinthQuestionModalActionTypes } from './Constants';

const initialState = {
	open: false,
	data: {},
};

export default function labyrinthQuestionModalReducer(state = initialState, action) {
	const { type, payload } = action || {};
	const { data } = payload || {};

	switch (type) {
		case labyrinthQuestionModalActionTypes.TOGGLE_LABYRINTH_QUESTION_MODAL:
			return {
				...state,
				...data,
			};
		case labyrinthQuestionModalActionTypes.CLEAR_LABYRINTH_QUESTION_MODAL_STATE:
			return initialState;
		default:
			return state;
	}
}
