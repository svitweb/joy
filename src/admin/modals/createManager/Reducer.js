import { createManagerModalActionTypes } from './Constants';

// import Cookies from "js-cookie";
// import { COOKIES } from '../../services/Constants';

const initialState = {
	open: false,
	submitLoading: false,
};

export default function createManagerReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case createManagerModalActionTypes.TOGGLE_CREATE_MANAGER_MODAL:
			return {
				...state,
				...data,
			};
		case createManagerModalActionTypes.CREATE_MANAGER:
			return {
				...state,
				submitLoading: true,
			};
		case createManagerModalActionTypes.CREATE_MANAGER_SUCCESS:
			return {
				...state,
				submitLoading: false,
				open: false,
			};
		case createManagerModalActionTypes.CREATE_MANAGER_ERROR:
			return {
				...state,
				submitLoading: false,
			};
		default:
			return state;
	}
}
