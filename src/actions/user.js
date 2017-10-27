export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const VERIFY_USER = 'VERIFY_USER';
export const VERIFY_USER_SUCCESS = 'VERIFY_USER_SUCCESS';
export const VERIFY_USER_FAILURE = 'VERIFY_USER_FAILURE';

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
      .then((res) => {
        if (!res.ok) {
          return Promise.reject({
            error: 'Invalid password or username'
          });
        }

        return res.json();
      })
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        dispatch(signinUserSuccess());
      })
      .catch((error) => {
        dispatch(signinUserFailure({error}));
      });
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
      .then((res) => {
        if (!res.ok) {
          return Promise.reject({
            error: 'Invalid password or username'
          });
        }

        return res.json();
      })
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        dispatch(signupUserSuccess());
      })
      .catch((error) => {
        dispatch(signupUserFailure({error}));
      });
  };
};

function VerifyUserRequest() {
  return {
    type: VERIFY_USER
  };
}

function VerifyUserSuccess() {
  return {
    type: VERIFY_USER_SUCCESS
  };
}

function VerifyUserFailure(error) {
  return {
    type: VERIFY_USER_FAILURE,
    error: error
  };
}

export const VerifyUser = (token) => {
  const config = {
    method: 'get',
    headers: { 'Authorization': token }
  };

  return (dispatch) => {
    dispatch(VerifyUserRequest());
    fetch('/api/users/user', config)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject({});
        }

        return res.json();
      })
      .then(() => {
        dispatch(VerifyUserSuccess());
      })
      .catch((error) => {
        localStorage.removeItem('jwt');
        dispatch(VerifyUserFailure({error}));
      });
  };
};