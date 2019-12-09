import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.css';
import configureStore from './store';

let store = configureStore();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
