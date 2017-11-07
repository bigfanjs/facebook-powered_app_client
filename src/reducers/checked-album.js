import {
  FETCH_ALBUM,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE
} from '../actions/albums';

const defaultState = {
  loading: false,
  photos: [],
  name: null,
  error: null
};

export default function (state=defaultState, {type, photos, name, error}) {
  switch (type) {
    case FETCH_ALBUM:
      return {...state, photos: null, name: null, loading: true, error: null};
    case FETCH_ALBUM_SUCCESS:
      return {...state, photos: photos, name: name, loading: false, error: null};
    case FETCH_ALBUM_FAILURE:
      return {...state, photos: null, name: null, loading: false, error: error};
    default:
      return state;
  }
}