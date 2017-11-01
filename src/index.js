import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import FbPoweredApp from './reducers';
import {VerifyUser} from './actions/user';
import registerServiceWorker from './registerServiceWorker';
import setupfacebookSDK from './setup-fb-sdk';

import './index.css';

const store = createStore(FbPoweredApp, applyMiddleware(thunk));
if (localStorage.jwt) {
  store.dispatch(VerifyUser(localStorage.jwt));
}
setupfacebookSDK(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
