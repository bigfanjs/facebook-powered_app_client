import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import FbPoweredApp from './reducers';
import {VerifyUser} from './actions/user';

import './index.css';

const store = createStore(FbPoweredApp, applyMiddleware(thunk));
store.dispatch(VerifyUser(localStorage.jwt));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
