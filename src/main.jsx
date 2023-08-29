import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalContextProvider } from "./providers/ContextProvider";
import ReactQuery from "./query/ReactQuery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactQuery>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ReactQuery>
  </React.StrictMode>
);
