import {menuActionTypes} from './Constants';

const initialState = {
  loading: false,
  error: '',
  isAddListModal: false,
	isJoinListModal:false,
};

export default function signInReducer(state = initialState, action) {
  const {type, payload} = action;
  const {status} = payload || {};

  switch (type) {
    case menuActionTypes.TOGGLE_CREATE_LIST_MODAL:
      return {
        ...state,
        isCreateListModal: status,
      };

		case menuActionTypes.TOGGLE_JOIN_LIST_MODAL:
			return {
				...state,
				isJoinListModal: status,
			};

    case menuActionTypes.CREATE_LIST:
      return {
        ...state,
        error: '',
        loading: true,
      };

    default:
      return state;

  }
}
