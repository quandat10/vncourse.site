import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { Provider as AlertProvider } from "react-alert";

const store = createStore(reducers, applyMiddleware(thunk));
const options = {
  position: "top center",
  timeout: 2000,
  offset: "30px",
  transition: "scale",
};
const AlertTemplate = ({ message }) => (
    <div className="alert red-bg">{message}</div>
  );
ReactDom.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.querySelector("#root")
);

