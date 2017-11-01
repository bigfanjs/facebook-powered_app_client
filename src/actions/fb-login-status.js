/* globals FB */

export const LOGIN_STATUS = 'LOGIN_STATUS';

function updateStatus(status) {
  return {
    type: LOGIN_STATUS,
    status: status
  };
}

export const getLoginStatus = () => (
  (dispatch) => (
    FB.getLoginStatus((res) => {
      dispatch(updateStatus(res.status));
    })
  )
);

export const login = () => (
  (dispatch) => (
    FB.login(
      (res) => {dispatch(updateStatus(res.status));},
      {scope: 'user_photos'}
    )
  )
);