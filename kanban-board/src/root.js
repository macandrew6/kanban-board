import React from 'react';
import App from "./App";
import { Provider } from "react-redux";

const Root = () => {
  return (
    <div>
      <Provider>
        <App />
      </Provider>
    </div>
  );
};

export default Root;