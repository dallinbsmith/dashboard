import React from "react";
import DashboardComponent from "./Component";
import {Link} from "react-router-dom";

class DashboardContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header-container">
                <div className="invoices"></div>
                <DashboardComponent/>
            </div>
        )
    }
}

export default DashboardContainer;
