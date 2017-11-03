import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import "./css/customers.css";
import "./css/dashboard.css";
import "./css/invoices.css";
import "./css/reports.css";
import "./css/index.css";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router><App/></Router>, document.getElementById('root'));
