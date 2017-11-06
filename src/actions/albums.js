/* globals FB */

/*------------------------------|| Fecth A Multiple Albums ||------------------------------*/
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
    FB.api('me/albums?fields=name,description,cover_photo{images{source}}', (res) => {
      if (!res || res.error) {
        dispatch(fetchAlbumsFailure(res && res.error));
      } else {
        dispatch(fetchAlbumsSuccess(res.data));
      }
    });
  }
);

/*------------------------------|| Fecth A Single Album ||------------------------------*/
export const FETCH_ALBUM = 'FETCH_ALBUM';
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';
export const FETCH_ALBUM_FAILURE = 'FETCH_ALBUM_FAILURE';

function fetchAlbumStart() {
  return {
    type: FETCH_ALBUM
  };
}

function fetchAlbumSuccess(album) {
  return {
    type: FETCH_ALBUM_SUCCESS,
    album: album
  };
}

function fetchAlbumFailure(error) {
  return {
    type: FETCH_ALBUM_FAILURE,
    error: error
  };
}

export const fetchAlbum = (id) => (
  (dispatch) => {
    dispatch(fetchAlbumStart());
    FB.api(`/${ id }?fields=photos{images{source}}`, (res) => {
      if (!res || res.error) {
        dispatch(fetchAlbumFailure(res && res.error));
      } else {
        dispatch(fetchAlbumSuccess(res.photos.data));
      }
    });
  }
);