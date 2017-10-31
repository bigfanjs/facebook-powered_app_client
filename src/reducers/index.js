import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import user from './user';
import albums from './albums';
import fbLoginStatus from './fb-login-status';

export default combineReducers({user, form, albums, fbLoginStatus});