import '@config/reactotron';
import React from 'react';

import { Provider } from 'react-redux';

import App from './src/app';

import store from '@redux/store';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
