import React from "react";
import CManageOverview from "./cmanageviews/cmanageoverview/Container";
import CManageFind from "./cmanageviews/cmanagefind/Container";
import CManageCommunication from "./cmanageviews/cmanagecommunication/Container";
import CManageInvoice from "./cmanageviews/cmanageinvoice/Container";

function CustomerManagementComponent(props) {
    let view;
    if (props.view === "overview") {
        view = <CManageOverview/>
    } else if (props.view === "communication") {
        view = <CManageCommunication/>
    } else if (props.view === "invoice") {
        view = <CManageInvoice/>
    } else if (props.view === "finduser") {
        view = <CManageFind
            selectUserToEdit = {props.selectUserToEdit}/>
    }
    return (
        <div className = "customer-management">
            <div className = "cmanage-navbar-div">
            <div className = "cm-overview-icon"></div>
            <div className = "cm-find-icon"></div>
            <div className = "cm-communication-icon"></div>
            <div className = "cm-invoice-icon"></div>
            </div>
            {view}
        </div>
    )
}

export default CustomerManagementComponent;
