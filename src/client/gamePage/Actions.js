import { gamePageActionTypes } from './Constants';

export function changeData(data) {
	return {
		type: gamePageActionTypes.CHANGE_GAME_DATA,
		payload: { data },
	};
}
