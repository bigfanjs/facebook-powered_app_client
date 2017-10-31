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
          resolve(res);
          dispatch(updateStatus(res.status));
        } else {
          reject();
        }
      });
    })
  )
);
