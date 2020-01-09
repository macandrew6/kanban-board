import React from 'react';
import AppContainer from "./AppContainer";
import configureStore from './store';
import { Provider } from "react-redux";
import { loadState } from './localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);

const Root = () => {
  return (
    <div>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  );
};

export default Root;