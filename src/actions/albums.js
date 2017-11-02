/* globals FB */

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

function fetchAlbumsSuccess(albums) {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    albums: albums
  };
}

function fetchAlbumsFailure(error) {
  return {
    type: FETCH_ALBUMS_FAILURE,
    error: error
  };
}

export const fetchAlbums = () => (
  (dispatch) => {
    FB.api('me/albums?fields=name,description,photos{images{source}}', (res) => {
      if (!res || res.error) {
        dispatch(fetchAlbumsFailure(res && res.error));
      } else {
        dispatch(fetchAlbumsSuccess(res.data));
      }
    });
  }
);