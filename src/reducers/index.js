import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import user from './user';
import albums from './albums';
import fbLogin from './fb-login';

export default combineReducers({user, form, albums, fbLogin});