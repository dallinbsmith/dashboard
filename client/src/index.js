import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./main/App";
import "./css/index.css";
import "./css/dashboard.css";
import "./css/customers.css";
import "./css/cmanagefinduser.css";
import "./css/invoices.css";
import "./css/reports.css";
import "./css/editcustomer.css";
import "./css/cmanage.css"
import "./css/editcustomeroverview.css";


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Router><Provider store={store}><App/></Provider></Router>, document.getElementById('root'));
