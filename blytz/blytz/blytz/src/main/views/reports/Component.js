import React from "react";
import {Switch, Route} from "react-router-dom";
import Report from "./views/Report";

function ReportsComponent(props) {
    let searchId = props.searchId;
    return (
        <div className="reports-component-container">
            <div className="reports-window-container">
                <div className="reports-container">
                    {props.genReports()}
                </div>
                <div className="switch-container">
                    <Switch>
                        <Route path="/reports/:id" render={props => {
                                return (
                                    <Report searchId={searchId}{...props}/>
                                )
                            }}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ReportsComponent;
