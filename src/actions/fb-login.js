/* globals FB */

export const LOGIN_STATUS = 'LOGIN_STATUS';
export const LOGIN_STATUS_SUCCESS = 'LOGIN_STATUS_SUCCESS';
export const LOGIN_STATUS_FAILURE = 'LOGIN_STATUS_FAILURE';

function updateStatus() {
  return {
    type: LOGIN_STATUS
  };
}

function updateStatusSuccess(status) {
  return {
    type: LOGIN_STATUS_SUCCESS,
    status: status
  };
}

function updateStatusFailure(error) {
  return {
    type: LOGIN_STATUS_FAILURE,
    error: error
  };
}

export const getLoginStatus = () => (
  (dispatch) => {
    dispatch(updateStatus());
    FB.getLoginStatus((res) => {
      if (!res || res.error) {
        dispatch(updateStatusFailure(res.error));
      } else {
        dispatch(updateStatusSuccess(res.status));
      }
    });
  }
);

export const login = () => (
  (dispatch) => {
    dispatch(updateStatus());
    FB.login(
      (res) => {
        if (!res || res.error) {
          dispatch(updateStatusFailure(res.error));
        } else {
          dispatch(updateStatusSuccess(res.status));
        }
      },
      {scope: 'user_photos'}
    );
  }
);