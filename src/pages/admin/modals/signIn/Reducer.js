import { signInActionTypes } from './Constants';

// import Cookies from "js-cookie";
// import { COOKIES } from '../../services/Constants';

const initialState = {
	open: false,
	loading: false,
	userData: null,
};

export default function signInReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case signInActionTypes.TOGGLE_SIGN_IN_MODAL:
			return {
				...state,
				...data,
			};
		case signInActionTypes.SIGN_IN:
			return {
				...state,
				loading: true,
			};
		case signInActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				loading: false,
				userData: data,
				open: false,
			};
		case signInActionTypes.SIGN_IN_ERROR:
			return {
				...state,
				loading: false,
			};
		case signInActionTypes.SIGN_OUT:
			return {
				...state,
				userData: null,
			};
		case signInActionTypes.GET_USER_DATA_SUCCESS:
			return {
				...state,
				userData: data,
			};
		default:
			return state;
	}
}
