import React from "react";
import DashboardComponent from "./Component";

class DashboardContainer extends React.Component {
    constructor() {
        super();
        this.state = {}
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
