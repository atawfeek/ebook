import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes'
import { Provider } from 'react-redux';
import store from "./store-config";


ReactDOM.render(<Provider store={store}>
  <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
 