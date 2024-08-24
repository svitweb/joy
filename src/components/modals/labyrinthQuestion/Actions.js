import { labyrinthQuestionModalActionTypes } from './Constants';

export function toggleLabyrinthQuestionModal(data) {
	return {
		type: labyrinthQuestionModalActionTypes.TOGGLE_LABYRINTH_QUESTION_MODAL,
		payload: { data },
	};
}

export function clearState() {
	return {
		type: labyrinthQuestionModalActionTypes.CLEAR_LABYRINTH_QUESTION_MODAL_STATE,
	};
}
