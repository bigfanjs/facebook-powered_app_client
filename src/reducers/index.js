import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import user from './user';
import albums from './albums';
import fbLogin from './fb-login';
import SDKLoaded from './sdk-loaded';
import checkedAlbum from './checked-album';

export default combineReducers({
  user,
  form,
  albums,
  fbLogin,
  SDKLoaded,
  checkedAlbum
});