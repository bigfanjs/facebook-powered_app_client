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
    new Promise((resolve, reject) => {
      FB.getLoginStatus((res) => {
        if (res.status === 'connected') {
          dispatch(updateStatus(res.status));
          resolve(res);
        } else {
          reject();
        }
      });
    })
  )
);

export const connectToFacebook = () => (
  (dispatch) => (
    new Promise((resolve, reject) => {
      FB.login((res) => {
        if (res.authResponse) {
          dispatch(updateStatus(res.status));
          resolve(res);
        } else {
          reject();
        }
      }, {scope: 'user_photos'});
    })
  )
);