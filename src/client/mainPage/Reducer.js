import { mainPageActionTypes } from './Constants';
import Cookies from 'js-cookie';
import { reset } from 'redux-form';

const initialState = {
	contactRequestSubmitLoading: false,
	contactRequestSubmitted: false,
	contactRequestWasSubmitted: false,
};

export default function mainPageReducer(state = initialState, action) {
	const { type, payload } = action;
	const { data } = payload || {};

	switch (type) {
		case mainPageActionTypes.CONTACT_REQUEST:
			return {
				...state,
				loadingSubmitContact: true,
			};

		case mainPageActionTypes.CONTACT_REQUEST_SUCCESS:
			Cookies.set('contactRequest', true, { expires: 1 });
			return {
				...state,
				contactRequestSubmitLoading: false,
				contactRequestSubmitted: true,
			};

		case mainPageActionTypes.CONTACT_REQUEST_ERROR:
			return {
				...state,
				loadingSubmitContact: false,
			};
		case mainPageActionTypes.SET_SUBMITTED_STATE:
			return {
				...state,
				contactRequestWasSubmitted: data,
			};

		case mainPageActionTypes.CLEAR_CONTACT_REQUEST_FORM:
			reset('contactRequestForm');
			return state;

		default:
			return state;
	}
}
