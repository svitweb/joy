import { adminActionTypes } from './Constants';

// import Cookies from "js-cookie";
// import { COOKIES } from '../../services/Constants';

const initialState = {
	loading: false,
	data: null,
	isOpenLoginModal: false,
	logInLoading: true,
};

export default function adminReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case adminActionTypes.TOGGLE_ADMIN_LOGIN_MODAL:
			return {
				...state,
				...data,
			};
		case adminActionTypes.LOGIN_ADMIN:
			return {
				...state,
				logInLoading: true,
			};
		case adminActionTypes.LOGIN_ADMIN_SUCCESS:
			return {
				...state,
				logInLoading: false,
				isOpenLoginModal: false,
			};
		case adminActionTypes.LOGIN_ADMIN_ERROR:
			return {
				...state,
				logInLoading: false,
			};
		case adminActionTypes.GET_ADMIN_DATA:
			return {
				...state,
				loading: true,
			};
		case adminActionTypes.GET_ADMIN_DATA_SUCCESS:
			return {
				...state,
				data,
				loading: false,
			};
		case adminActionTypes.GET_ADMIN_DATA_ERROR:
			return {
				...state,
				loading: false,
				isOpenLoginModal: true,
			};
		case adminActionTypes.CLEAR_ADMIN_STATE:
			return initialState;
		default:
			return state;
	}
}
