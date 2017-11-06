import {
  FETCH_ALBUM,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE
} from '../actions/albums';

const defaultState = {
  loading: false,
  album: [],
  error: null
};

export default function (state=defaultState, action) {
  switch (action.type) {
    case FETCH_ALBUM:
      return {...state, album: null, loading: true, error: null};
    case FETCH_ALBUM_SUCCESS:
      return {...state, album: action.album, loading: false, error: null};
    case FETCH_ALBUM_FAILURE:
      return {...state, album: null, loading: false, error: action.error};
    default:
      return state;
  }
}