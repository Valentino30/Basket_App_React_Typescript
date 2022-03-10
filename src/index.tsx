import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ItemsProvider } from "./hooks/item";

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
