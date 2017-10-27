import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,

  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,

  VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAILURE
} from '../actions/user';

const defaultState = {
  authenticated: false,
  loading: false,
  error: null
};

export default function (state=defaultState, action) {
  switch (action.type) {

    // Sign In
    case SIGNIN_USER:
      return {...state, status: 'signin', loading: true};
    case SIGNIN_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false};
    case SIGNIN_USER_FAILURE:
      return {...state, status: 'signin', loading: false, error: action.error};

    // Sign Up
    case SIGNUP_USER:
      return {...state, status: 'signup', loading: true};
    case SIGNUP_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false};
    case SIGNUP_USER_FAILURE:
      return {...state, status: 'signup', loading: false, error: action.error};

    // Verify User
    case VERIFY_USER:
      return {...state, status: 'verify', loading: true};
    case VERIFY_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false};
    case VERIFY_USER_FAILURE:
      return {...state, status: 'verify', loading: false, error: action.error};

    default:
      return state;
  }
}