import React from 'react';
import AppContainer from "./AppContainer";
import configureStore from './store';
import { Provider } from "react-redux";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);
// store.subscribe(() => {
//   saveState({
//     allListItems: store.getState().todos
//   });
// });

console.log(store.getState());

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