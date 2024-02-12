import {listPageActionTypes} from './ListPageConstants';
// import Cookies from "js-cookie";
// import {COOKIES} from '../../services/Constants';

const initialState = {
  loading: false,
  error: '',
};

export default function listPageReducer(state = initialState, action) {
  const { type, payload } = action;
  const { listData, listId } = payload || {};

  switch (type) {
    case listPageActionTypes.GET_LIST_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case listPageActionTypes.CREATE_LIST:
      // Cookies.set(COOKIES.accessToken, token, {expires: 7});

      return {
        ...state,
        error: '',
        loading: true,
      };

    case listPageActionTypes.GET_LIST_DETAILS_SUCCESS:
      return {
        ...state,
        // error: error.message,
        // loading: false,
        playListDetails: listData,
        playListId: listId
      };

    case listPageActionTypes.LOG_OUT:
      return {
        ...state,
        // error: error.message,
        // loading: false,
      };

    case listPageActionTypes.ADD_SONG:
      const newSong = payload.data;

      return {
        ...state,
        // error: error.message,
        // loading: false,
      };

    case listPageActionTypes.UPDATE_PLAYLIST_SONGS:
      return {
        ...state,
        playListDetails: { songs: action.payload.playListSongs.data.orderedPlaylistSongs }
      };

    default:
      return state;

  }
}
