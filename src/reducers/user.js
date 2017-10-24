import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,

  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from '../actions/user';

export default function (state, action) {
  switch (action.type) {

    // Sign In
    case SIGNIN_USER:
      return {...state, authenticated: false, loading: true};
    case SIGNIN_USER_SUCCESS:
      return {...state, authenticated: true, loading: false};
    case SIGNIN_USER_FAILURE:
      return {...state, authenticated: false, loading: false, error: action.error};

    // Sign Up
    case SIGNUP_USER:
      return {...state, authenticated: false, loading: true};
    case SIGNUP_USER_SUCCESS:
      return {...state, authenticated: true, loading: false};
    case SIGNUP_USER_FAILURE:
      return {...state, authenticated: false, loading: false, error: action.error};
  }
}