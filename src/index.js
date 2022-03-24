import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import App from "./App";

import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
