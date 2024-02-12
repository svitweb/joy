import { mainPageActionTypes } from './Constants';

export function getList() {
	return {
		type: mainPageActionTypes.GET_LIST,
		payload: {},
	};
}

export function getListSuccess(list) {
	return {
		type: mainPageActionTypes.GET_LIST_SUCCESS,
		payload: {
			list,
		},
	};
}

export function editList(name, password, id) {
	return {
		type: mainPageActionTypes.EDIT_LIST,
		payload: {
			name,
			password,
			id,
		},
	};
}

export function editListInit(name, password, listId) {
	return {
		type: mainPageActionTypes.EDIT_LIST_INIT,
		payload: {
			editListData: {
				name,
				password,
				listId,
			},
		},
	};
}

export function toggleEditListModal(status) {
	return {
		type: mainPageActionTypes.TOGGLE_EDIT_LIST_MODAL,
		payload: {
			status,
		},
	};
}

export function deleteList(id) {
	return {
		type: mainPageActionTypes.DELETE_LIST,
		payload: {
			id,
		},
	};
}
