import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
} from '../actions/albums';

const defaultState = {
  loading: false,
  error: null,
  items: []
};

export default function (state=defaultState, action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {...state, loading: true, error: null, items: []};
    case FETCH_ALBUMS_SUCCESS:
      return {...state, loading: false, error: null, items: action.albums};
    case FETCH_ALBUMS_FAILURE:
      return {...state, loading: false, error: action.error, items: []};
    default:
      return state;
  }
}