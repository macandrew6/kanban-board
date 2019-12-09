import React from 'react';
import AppContainer from "./AppContainer";
import { Provider } from "react-redux";

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  );
};

export default Root;