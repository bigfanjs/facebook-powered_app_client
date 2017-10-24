export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

function signinUserRequest() {
  return {
    type: SIGNIN_USER
  };
}

function signinUserSuccess() {
  return {
    type: SIGNIN_USER_SUCCESS
  };
}

function signinUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    error: error
  };
}

export function signinUser(email, password) {
  const config = {
    method: 'post',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${ email }&password=${ password }`
  };

  return (dispatch) => {
    dispatch(signinUserRequest());
    fetch('/api/users/signin', config)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('jwt', json.response.data.token);
        dispatch(signinUserSuccess());
      })
      .catch((error) => {
        dispatch(signinUserFailure(error));
      });
  
    dispatch();
  };
}