import {signInActionTypes} from './SignInConstants';
// import Cookies from "js-cookie";

// import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
const initialState = {
	loading: false,
	error: '',
};

export default function signInReducer(state = initialState, action) {
	const {type, payload} = action;
	const {error} = payload || {};

	switch (type) {
		case signInActionTypes.LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};

		case signInActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				error: '',
				loading: false,
			};

		case signInActionTypes.LOGIN_ERROR:
			return {
				...state,
				error: error.message,
				loading: false,
			};


		default:
			return state;

	}
}
