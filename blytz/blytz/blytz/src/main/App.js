import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./views/dashboard/Container";
import About from "./views/about/Container";
import InvoicesContainer from "./views/invoices/Container";
import Footer from "./Footer";

import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="background-gradient">
          <div className="gray-background-overlap">
            <div className= "settings-box">
              <div className = "settings-gear"></div>
              </div>
            <div className ="menu-box">
              <div className = "menu-icon"></div>
            </div>
            <Navbar className = "nav-bar"/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/invoices" component={InvoicesContainer}/>
                <Route path="/messages" component={About}/>
          </Switch>
            <Footer/>
            </div>
        </div>
    )
}

export default App;
