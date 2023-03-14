import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AppProvider } from "./Context";
import { BrowserRouter } from "react-router-dom";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start();
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
