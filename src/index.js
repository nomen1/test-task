import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./App/AppContainer";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
