import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as UserApi from './util/user_api_util';
import * as SessionApi from './util/session_api_util';
import * as actions from './actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.UserApi = UserApi;
  window.SessionApi = SessionApi;
  window.actions = actions;

  ReactDOM.render(<Root store={store} />, root);
});