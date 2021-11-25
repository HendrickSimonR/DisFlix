import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as api from './util';
import * as actions from './actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  
  if (window.user) {
    preloadedState = {
      session: { user: window.user }
    }
  };
  
  const store = configureStore(preloadedState);
  window.store = store;
  window.api = api;
  window.actions = actions;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});