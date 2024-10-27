import { gamePageActionTypes } from './Constants';
import Cookies from 'js-cookie';
import { reset } from 'redux-form';
import { getLocalStorageItem, setLocalStorageItem } from '../../services/Helper';

const storedGameData = getLocalStorageItem('gameData');

const initialState = {
	gameData: storedGameData ? JSON.parse(storedGameData) : {},
	loadingGetGame: true,
	gameAvailable: false,
};

export default function gamePageReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case gamePageActionTypes.GET_GAME:
			return {
				...state,
				loadingGetGame: true,
			};
		case gamePageActionTypes.GET_GAME_SUCCESS:
			return {
				...state,
				loadingGetGame: false,
				gameAvailable: true,
			};
		case gamePageActionTypes.GET_GAME_ERROR:
			return {
				...state,
				loadingGetGame: false,
				gameAvailable: false,
			};
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
