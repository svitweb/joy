import keyMirror from 'keymirror';

export const mainPageActionTypes = keyMirror(
    {
      GET_LIST: null,
      GET_LIST_SUCCESS: null,
      TOGGLE_EDIT_LIST_MODAL: null,
      EDIT_LIST_INIT: null,
      EDIT_LIST: null,
      DELETE_LIST: null,
      LOG_OUT: null,
    }
);
