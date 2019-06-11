import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
