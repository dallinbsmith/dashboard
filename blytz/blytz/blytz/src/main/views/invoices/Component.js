import React from "react";
import {Switch, Route} from "react-router-dom";
import Invoice from "./views/Invoice";

function InvoicesComponent(props) {
    let searchId = props.searchId;
    return (
        <div className="invoices-component-container">
            <div className="invoices-window-container">
                <div className="invoices-container">
                    {props.genInvoices()}
                </div>
                <div className="switch-container">
                    <Switch>
                        <Route path="/invoices/:id" render={props => {
                                return (
                                    <Invoice searchId={searchId}{...props}/>
                                )
                            }}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default InvoicesComponent;
