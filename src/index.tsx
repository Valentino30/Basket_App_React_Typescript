import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { ItemsProvider } from "./hooks/item";

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
      <ToastContainer position="top-center" theme="colored" />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
