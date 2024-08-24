import { towerModalActionTypes } from './Constants';

export function toggleTowerModal(data) {
	return {
		type: towerModalActionTypes.TOGGLE_TOWER_MODAL,
		payload: { data },
	};
}

export function clearState() {
	return {
		type: towerModalActionTypes.CLEAR_TOWER_MODAL_STATE,
	};
}
