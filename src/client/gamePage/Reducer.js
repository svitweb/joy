import { gamePageActionTypes } from './Constants';
import Cookies from 'js-cookie';
import { reset } from 'redux-form';
import { getLocalStorageItem, setLocalStorageItem } from '../../services/Helper';

const storedGameData = getLocalStorageItem('gameData');

const initialState = {
	gameData: storedGameData ? JSON.parse(storedGameData) : {},
};

export default function gamePageReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case gamePageActionTypes.CHANGE_GAME_DATA:
			setLocalStorageItem('gameData', JSON.stringify(data || {}));

			return {
				...state,
				gameData: data,
			};

		default:
			return state;
	}
}
