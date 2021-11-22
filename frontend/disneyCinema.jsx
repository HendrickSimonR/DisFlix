import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as api from './util';
import * as actions from './actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function () {
  const store = configureStore();
  window.store = store;
  window.api = api;
  window.actions = actions;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});