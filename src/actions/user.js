export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

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

export const signinUser = ({email, password}) => {
  const config = {
    method: 'post',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
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
};

function signupUserRequest() {
  return {
    type: SIGNUP_USER
  };
}

function signupUserSuccess() {
  return {
    type: SIGNUP_USER_SUCCESS
  };
}

function signupUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    error: error
  };
}

export const signupUser = (email, password) => {
  const config = {
    method: 'post',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${ email }&password=${ password }`
  };

  return (dispatch) => {
    dispatch(signupUserRequest());
    fetch('/api/users/signup', config)
      .then((res) => res.json())
      .then((user) => {
        if (!user.response.ok) {
          dispatch(signupUserFailure(user.message));
        } else {
          localStorage.setItem('jwt', user.data.token);
          dispatch(signupUserSuccess());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  
    dispatch();
  };
};