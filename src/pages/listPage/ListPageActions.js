import {listPageActionTypes} from './ListPageConstants';

export function getListDetails(id) {
  return {
    type: listPageActionTypes.GET_LIST_DETAILS,
    payload: {
      id
    },
  };
}

export function getListSuccess(listData, listId) {
  return {
    type: listPageActionTypes.GET_LIST_DETAILS_SUCCESS,
    // error: true,
    payload: {
      listData,
      listId
    },
  };
}

export function createList(name, password) {
  return {
    type: listPageActionTypes.CREATE_LIST,
    payload: {
      name,
      password
    },
  };
}

export function addSong(listId, data) {
  return {
    type: listPageActionTypes.ADD_SONG,
    payload: {
      listId,
      data
    },
  };
}

export function rateSong(listId, songId, data) {
  return {
    type: listPageActionTypes.RATE_SONG,
    payload: {
      listId,
      songId,
      data
    },
  };
}

export function deleteList(id) {
  return {
    type: listPageActionTypes.DELETE_LIST,
    payload: {
      id
    },
  };
}

export function logOut() {
  return {
    type: listPageActionTypes.LOG_OUT,
    // error: true,
    payload: {},
  };
}

export function updatePlayListSongs(playListSongs) {

  return {
    type: listPageActionTypes.UPDATE_PLAYLIST_SONGS,
    payload: {
      playListSongs
    }
  }
}
