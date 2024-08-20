import { cardModalActionTypes } from './Constants';

export function toggleCardModal(data) {
	return {
		type: cardModalActionTypes.TOGGLE_CARD_MODAL,
		payload: { data },
	};
}
