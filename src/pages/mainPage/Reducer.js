import { mainPageActionTypes } from './Constants';
// import Cookies from "js-cookie";
// import {COOKIES} from '../../services/Constants';

const initialState = {
	loading: false,
	error: '',
	isAddListModal: false,
	editListData: {},
};

export default function mainPageReducer(state = initialState, action) {
	const { type, payload } = action;
	const { list, status, editListData } = payload || {};

	switch (type) {
		case mainPageActionTypes.GET_LIST:
			return {
				...state,
				loading: true,
			};

		case mainPageActionTypes.GET_LIST_SUCCESS:
			return {
				...state,
				lists: list,
			};

		case mainPageActionTypes.TOGGLE_EDIT_LIST_MODAL:
			return {
				...state,
				isAddListModal: status,
			};

		case mainPageActionTypes.EDIT_LIST_INIT:
			return {
				...state,
				isAddListModal: true,
				editListData,
			};

		default:
			return state;
	}
}
