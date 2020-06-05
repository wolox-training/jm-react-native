import '@config/reactotron';
import React from 'react';
import { Provider } from 'react-redux';

import store from '@redux/store';

import App from './src/app';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
