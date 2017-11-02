import React from "react";
import Navbar from "./Navbar";
import Home from "./views/Home";
import About from "./views/about/Container";
import ReportsContainer from "./views/reports/Container";
import Footer from "./Footer";

import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="background-gradient">
          <div className="gray-background-overlap">
            <Navbar className = "nav-bar"/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/reports" component={ReportsContainer}/>
            </Switch>
            <Footer/>
            </div>
        </div>
    )
}

export default App;
