import { LOGIN_STATUS } from '../actions/fb-login-status';

export default (state=false, action) => {
  switch (action.type) {
    case LOGIN_STATUS:
      return action.status;
    default:
      return state;
  }
};