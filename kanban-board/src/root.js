import React from 'react';
import App from "./App";
import { Provider } from "react-redux";

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

export default Root;