import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components-redux/reducer/store";
import App from "./App";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
