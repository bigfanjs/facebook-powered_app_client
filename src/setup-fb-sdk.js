/* globals FB */

import {getLoginStatus} from './actions/fb-login';

export default (store) => {
  window.fbAsyncInit = () => {
    FB.init({
      appId: '325131021294419',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10'
    });

    store.dispatch(getLoginStatus());
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};