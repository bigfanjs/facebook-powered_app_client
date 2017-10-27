import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,

  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,

  VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAILURE,

  SIGNOUT_USER
} from '../actions/user';

const defaultState = {
  status: null,
  loading: false,
  error: null
};

export default function (state=defaultState, action) {
  switch (action.type) {

    // Sign In User
    case SIGNIN_USER:
      return {...state, status: 'signin', loading: true, error: null};
    case SIGNIN_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false, error: null};
    case SIGNIN_USER_FAILURE:
      return {...state, status: 'signin', loading: false, error: action.error};

    // Sign Up User
    case SIGNUP_USER:
      return {...state, status: 'signup', loading: true, error: null};
    case SIGNUP_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false, error: null};
    case SIGNUP_USER_FAILURE:
      return {...state, status: 'signup', loading: false, error: action.error};

    // Verify User
    case VERIFY_USER:
      return {...state, status: 'verify', loading: true, error: null};
    case VERIFY_USER_SUCCESS:
      return {...state, status: 'authenticated', loading: false, error: null};
    case VERIFY_USER_FAILURE:
      return {...state, status: 'verify', loading: false, error: action.error};

    // Logout User
    case SIGNOUT_USER:
      return {...state, status: 'signout', loading: false, error: null};

    default:
      return state;
  }
}